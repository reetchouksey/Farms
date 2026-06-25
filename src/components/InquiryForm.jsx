import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MessageCircle, CheckCircle2, AlertCircle, Send } from 'lucide-react';
import {
  selectDraft,
  selectStatus,
  selectError,
  updateDraftField,
  addInquiry,
  resetDraft,
  setError,
  setStatus,
} from '../store/inquirySlice';
import { content } from '../data/content';
import { useT } from '../hooks/useT';
import { waUrl, BUSINESS } from '../data/business';

/**
 * Builds a WhatsApp-friendly text from the form draft.
 * Skips empty optional fields. Always includes the header so the
 * shop owner can recognise it instantly.
 */
function buildWhatsAppText(draft) {
  const lines = ['*New Inquiry — Patankar Krishi Seva Kendra*', ''];
  if (draft.name) lines.push(`*Name:* ${draft.name}`);
  if (draft.mobile) lines.push(`*Mobile:* ${draft.mobile}`);
  if (draft.village) lines.push(`*Village/City:* ${draft.village}`);
  if (draft.product) lines.push(`*Product Interest:* ${draft.product}`);
  if (draft.message) {
    lines.push('', '*Message:*', draft.message);
  }
  return lines.join('\n');
}

export default function InquiryForm() {
  const dispatch = useDispatch();
  const draft = useSelector(selectDraft);
  const status = useSelector(selectStatus);
  const error = useSelector(selectError);
  const { t } = useT();
  const [submitting, setSubmitting] = useState(false);

  const setField = (field) => (e) =>
    dispatch(updateDraftField({ field, value: e.target.value }));

  const sendToWhatsApp = (text, saveAsInquiry) => {
    if (saveAsInquiry) dispatch(addInquiry({ ...draft }));
    dispatch(setStatus('success'));
    setSubmitting(true);
    setTimeout(() => {
      window.open(waUrl(text), '_blank', 'noopener,noreferrer');
      if (saveAsInquiry) dispatch(resetDraft());
      setSubmitting(false);
    }, 900);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, mobile, product, message } = draft;

    if (!name.trim() || !mobile.trim() || !product || !message.trim()) {
      dispatch(setError(t(content.contact.errors.required)));
      return;
    }
    if (!/^[6-9]\d{9}$/.test(mobile.trim())) {
      dispatch(setError(t(content.contact.errors.mobile)));
      return;
    }

    sendToWhatsApp(buildWhatsAppText(draft), true);
  };

  const handleQuickChat = () => {
    const hasAnyData =
      draft.name || draft.mobile || draft.village || draft.product || draft.message;
    const text = hasAnyData
      ? buildWhatsAppText(draft)
      : 'Hello Patankar Krishi Seva Kendra, I want to inquire about your products.';
    sendToWhatsApp(text, hasAnyData);
  };

  return (
    <div className="bg-white rounded-2xl p-5 sm:p-8 md:p-10 shadow-medium border border-line">
      <h3 className="text-xl sm:text-2xl font-bold text-primary-dark mb-2">{t(content.contact.formTitle)}</h3>
      <p className="text-ink-light mb-4 text-sm sm:text-[0.96rem]">{t(content.contact.formSub)}</p>

      <div className="flex items-start gap-2.5 p-3 sm:p-3.5 mb-5 sm:mb-6 rounded-xl bg-[#25d366]/10 border border-[#25d366]/30 text-xs sm:text-[0.88rem] text-primary-dark">
        <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#25d366] flex-shrink-0 mt-0.5" />
        <span>{t(content.contact.waNote)}</span>
      </div>

      <form onSubmit={handleSubmit} noValidate>
        <div className="grid md:grid-cols-2 gap-3 sm:gap-4">
          <div>
            <label className="input-label" htmlFor="name">
              {t(content.contact.f.name)} <span className="text-red-600">*</span>
            </label>
            <input
              id="name"
              type="text"
              className="form-control"
              placeholder="Ramesh Patel"
              value={draft.name}
              onChange={setField('name')}
              required
            />
          </div>

          <div>
            <label className="input-label" htmlFor="mobile">
              {t(content.contact.f.mobile)} <span className="text-red-600">*</span>
            </label>
            <input
              id="mobile"
              type="tel"
              className="form-control"
              placeholder="9876543210"
              maxLength={10}
              value={draft.mobile}
              onChange={setField('mobile')}
              required
            />
          </div>

          <div className="md:col-span-2">
            <label className="input-label" htmlFor="village">
              {t(content.contact.f.village)}{' '}
              <span className="text-ink-muted font-normal lowercase">
                ({t(content.contact.f.optional)})
              </span>
            </label>
            <input
              id="village"
              type="text"
              className="form-control"
              placeholder="Bhoura"
              value={draft.village}
              onChange={setField('village')}
            />
          </div>

          <div className="md:col-span-2">
            <label className="input-label" htmlFor="product">
              {t(content.contact.f.product)} <span className="text-red-600">*</span>
            </label>
            <select
              id="product"
              className="form-control appearance-none bg-no-repeat bg-[right_1rem_center] pr-10"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'><path d='M1 1l5 5 5-5' stroke='%231b5e20' stroke-width='2' fill='none' stroke-linecap='round'/></svg>\")",
              }}
              value={draft.product}
              onChange={setField('product')}
              required
            >
              <option value="">{t(content.contact.f.selectOpt)}</option>
              {content.contact.productOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {t(opt.label)}
                </option>
              ))}
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="input-label" htmlFor="message">
              {t(content.contact.f.message)} <span className="text-red-600">*</span>
            </label>
            <textarea
              id="message"
              rows={4}
              className="form-control resize-y min-h-[120px]"
              placeholder={t(content.contact.f.msgPlaceholder)}
              value={draft.message}
              onChange={setField('message')}
              required
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mt-3">
          <button
            type="submit"
            disabled={submitting}
            className="btn btn-whatsapp flex-[2] justify-center min-w-[200px] disabled:opacity-70 disabled:cursor-wait"
          >
            <MessageCircle className="w-5 h-5" />
            {submitting ? '...' : t(content.contact.f.submit)}
          </button>
          <button
            type="button"
            onClick={handleQuickChat}
            disabled={submitting}
            className="btn btn-outline flex-1 justify-center min-w-[160px] disabled:opacity-70"
          >
            <Send className="w-4 h-4" />
            {t(content.contact.f.direct)}
          </button>
        </div>

        <p className="text-xs text-ink-muted mt-3 text-center flex items-center justify-center gap-1.5">
          <MessageCircle className="w-3.5 h-3.5 text-[#25d366]" />
          WhatsApp: <strong>+91 {BUSINESS.phones[0].slice(0, 5)} {BUSINESS.phones[0].slice(5)}</strong>
        </p>

        {status === 'success' && submitting && (
          <div className="mt-4 flex items-start gap-2.5 p-3.5 rounded-xl bg-mint border border-leaf text-primary-dark text-sm font-medium">
            <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
            <span>{t(content.contact.success)}</span>
          </div>
        )}
        {status === 'error' && (
          <div className="mt-4 flex items-start gap-2.5 p-3.5 rounded-xl bg-red-50 border border-red-300 text-red-800 text-sm font-medium">
            <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
            <span>{error}</span>
          </div>
        )}
      </form>
    </div>
  );
}
