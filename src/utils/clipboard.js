export const copyTextToClipboard = async (text) => {
  if (!text) {
    return false;
  }

  const prefersSelectionCopy =
    navigator.maxTouchPoints > 0 || /Android|iPad|iPhone|iPod/i.test(navigator.userAgent);

  if (prefersSelectionCopy && copyTextWithSelection(text)) {
    return true;
  }

  if (navigator.clipboard?.writeText && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // Fall back for mobile browsers that expose Clipboard API but reject it.
    }
  }

  return prefersSelectionCopy ? false : copyTextWithSelection(text);
};

const copyTextWithSelection = (text) => {
  const textarea = document.createElement("textarea");
  const selection = document.getSelection();
  const activeElement = document.activeElement;
  const selectedRange = selection?.rangeCount ? selection.getRangeAt(0) : null;

  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.setAttribute("aria-hidden", "true");
  textarea.style.position = "fixed";
  textarea.style.top = "0";
  textarea.style.left = "0";
  textarea.style.width = "1px";
  textarea.style.height = "1px";
  textarea.style.padding = "0";
  textarea.style.border = "0";
  textarea.style.opacity = "0";
  textarea.style.fontSize = "16px";

  document.body.appendChild(textarea);
  textarea.focus({ preventScroll: true });
  textarea.select();
  textarea.setSelectionRange(0, textarea.value.length);

  let copied = false;
  try {
    copied = document.execCommand("copy");
  } catch {
    copied = false;
  }

  document.body.removeChild(textarea);

  if (selectedRange && selection) {
    selection.removeAllRanges();
    selection.addRange(selectedRange);
  }

  if (activeElement instanceof HTMLElement) {
    activeElement.focus({ preventScroll: true });
  }

  return copied;
};
