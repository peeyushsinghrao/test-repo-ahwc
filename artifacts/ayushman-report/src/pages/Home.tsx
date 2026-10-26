import React, { useState, useRef, useEffect } from "react";
import {
  ClipboardList,
  FolderOpen,
  Download,
  Upload,
  CheckCircle2,
  AlertCircle,
  FileDown,
  Printer,
  BarChart3,
  Copy,
  Users,
  UserPlus,
  Trash2,
  Stamp,
  RotateCcw,
  Info,
  FileText,
  X,
  ArrowRight,
} from "lucide-react";

interface KarmachariRow {
  naam: string;
  pad: string;
  bank_khataa: string;
  bank_naam: string;
  ifsc: string;
  mobile: string;
}

interface AppleToast {
  type: "error" | "success" | "info";
  title: string;
  message?: string;
}

const KARYA_NAMES = [
  "ओपीडी",
  "प्रकृति परीक्षण",
  "आयुष सुविधा में पेनलबद्ध व्यक्तियों की संख्या",
  "उच्च रक्तचाप हेतु परीक्षित 30 वर्ष से अधिक आयु के व्यक्तियों का अनुपात",
  "मधुमेह हेतु परीक्षित 30 वर्ष से अधिक आयु के व्यक्तियों का अनुपात",
  "आयुष उपचार पा रहे मधुमेह रोगियों का अनुपात",
  "आयुष उपचार पा रहे उच्च रक्तचाप रोगियों का अनुपात",
  "जीवनशैली में परिवर्तन हेतु वर्ष में 06, सात दिवसीय अभियान",
  "परिवारों को वितरित ब्रोशर",
  "जनता की भागीदारी वाली अंतक्षेत्रीय बैठकों का आयोजन / भागीदारी",
];

const PAD_BASE: Record<string, number> = {
  AMO: 5000,
  "नर्स/कम्पा": 2000,
  ANM: 2000,
  ASHA: 1000,
};

const MONTHS = [
  "जनवरी", "फरवरी", "मार्च", "अप्रैल", "मई", "जून",
  "जुलाई", "अगस्त", "सितंबर", "अक्टूबर", "नवंबर", "दिसंबर",
];

const YEAR_OPTIONS = Array.from({ length: 11 }, (_, i) => 2020 + i);

const currentMonthHindi = MONTHS[new Date().getMonth()];
const currentYear = String(new Date().getFullYear());

function calcRashi(percent: number): number {
  if (percent < 31) return 0;
  if (percent <= 50) return Math.round((percent / 100) * 500);
  if (percent <= 70) return Math.round(0.75 * 500);
  return 500;
}

function calcPercent(lakshya: string, prapti: string): number {
  const l = parseFloat(lakshya);
  const p = parseFloat(prapti);
  if (!l || isNaN(l) || l === 0 || isNaN(p)) return 0;
  return Math.round((p / l) * 100 * 100) / 100;
}

function getDefaultRows(): { lakshya: string; prapti: string }[] {
  return KARYA_NAMES.map(() => ({ lakshya: "", prapti: "" }));
}

function getDefaultKarmachari(): KarmachariRow[] {
  return [
    { naam: "", pad: "AMO", bank_khataa: "", bank_naam: "", ifsc: "", mobile: "" },
    { naam: "", pad: "नर्स/कम्पा", bank_khataa: "", bank_naam: "", ifsc: "", mobile: "" },
    { naam: "", pad: "ANM", bank_khataa: "", bank_naam: "", ifsc: "", mobile: "" },
    { naam: "", pad: "ASHA", bank_khataa: "", bank_naam: "", ifsc: "", mobile: "" },
    { naam: "", pad: "ASHA", bank_khataa: "", bank_naam: "", ifsc: "", mobile: "" },
    { naam: "", pad: "ASHA", bank_khataa: "", bank_naam: "", ifsc: "", mobile: "" },
    { naam: "", pad: "ASHA", bank_khataa: "", bank_naam: "", ifsc: "", mobile: "" },
    { naam: "", pad: "ASHA", bank_khataa: "", bank_naam: "", ifsc: "", mobile: "" },
  ];
}

const GLOBAL_KEY = "ahwc_global";
const STAFF_MASTER_KEY = "ahwc_staff_master";
const monthKey = (m: string, y: string) => `ahwc_${m}_${y}`;

function getPreviousMonth(m: string, y: string): { maah: string; varsh: string } {
  const idx = MONTHS.indexOf(m);
  if (idx > 0) {
    return { maah: MONTHS[idx - 1], varsh: y };
  } else {
    return { maah: MONTHS[MONTHS.length - 1], varsh: String(parseInt(y) - 1) };
  }
}

function loadGlobal() {
  try {
    const raw = localStorage.getItem(GLOBAL_KEY);
    if (raw) return JSON.parse(raw) as { ahwcName: string; jila: string };
  } catch { /* ignore */ }
  return { ahwcName: "", jila: "" };
}

function loadStaffMaster(): KarmachariRow[] {
  try {
    const raw = localStorage.getItem(STAFF_MASTER_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch { /* ignore */ }

  try {
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k && k.startsWith("ahwc_") && k !== GLOBAL_KEY && k !== STAFF_MASTER_KEY) {
        const itemRaw = localStorage.getItem(k);
        if (itemRaw) {
          const item = JSON.parse(itemRaw);
          if (item && Array.isArray(item.karmachariRows) && item.karmachariRows.some((r: KarmachariRow) => r.naam || r.bank_khataa)) {
            return item.karmachariRows;
          }
        }
      }
    }
  } catch { /* ignore */ }

  return getDefaultKarmachari();
}

function saveStaffMaster(staff: KarmachariRow[]) {
  try {
    localStorage.setItem(STAFF_MASTER_KEY, JSON.stringify(staff));
  } catch { /* ignore */ }
}

function loadMonth(m: string, y: string) {
  try {
    const raw = localStorage.getItem(monthKey(m, y));
    if (raw) {
      const data = JSON.parse(raw);
      const rows = data.rows && Array.isArray(data.rows) && data.rows.length === 10
        ? data.rows
        : getDefaultRows();

      let karmachariRows: KarmachariRow[] = [];
      if (data.karmachariRows && Array.isArray(data.karmachariRows) && data.karmachariRows.length > 0) {
        karmachariRows = data.karmachariRows;
      } else {
        karmachariRows = loadStaffMaster();
      }

      return { rows, karmachariRows };
    }
  } catch { /* ignore */ }

  return {
    rows: getDefaultRows(),
    karmachariRows: loadStaffMaster(),
  };
}

export default function Home() {
  const savedGlobal = loadGlobal();
  const savedMonth = loadMonth(currentMonthHindi, currentYear);

  const [ahwcName, setAhwcName] = useState(savedGlobal.ahwcName);
  const [jila, setJila] = useState(savedGlobal.jila);
  const [maah, setMaah] = useState(currentMonthHindi);
  const [varsh, setVarsh] = useState(currentYear);
  const [rows, setRows] = useState(savedMonth.rows);
  const [karmachariRows, setKarmachariRows] = useState<KarmachariRow[]>(savedMonth.karmachariRows);

  const [generating, setGenerating] = useState(false);
  const [saveMsg, setSaveMsg] = useState("");
  const [showStamp, setShowStamp] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [previewZoom, setPreviewZoom] = useState<"fit" | "100%">("fit");
  const [previewScale, setPreviewScale] = useState(1);
  const [toast, setToast] = useState<AppleToast | null>(null);

  const scalerRef = useRef<HTMLDivElement>(null);
  const saveMsgTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const restoreFileRef = useRef<HTMLInputElement>(null);

  // Auto-scale live preview in right column
  useEffect(() => {
    const calcScale = () => {
      if (!scalerRef.current) return;
      if (previewZoom === "100%") {
        setPreviewScale(1);
        return;
      }
      const containerWidth = scalerRef.current.clientWidth - 32;
      if (containerWidth > 0) {
        const sc = Math.min(1, Math.max(0.45, containerWidth / 794));
        setPreviewScale(sc);
      }
    };

    calcScale();
    const ro = new ResizeObserver(calcScale);
    if (scalerRef.current) ro.observe(scalerRef.current);
    window.addEventListener("resize", calcScale);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", calcScale);
    };
  }, [previewZoom]);

  const showToast = (type: "error" | "success" | "info", title: string, message?: string) => {
    if (toastTimer.current) clearTimeout(toastTimer.current);
    setToast({ type, title, message });
    toastTimer.current = setTimeout(() => {
      setToast(null);
    }, 3500);
  };

  const showSaved = () => {
    setSaveMsg("डेटा सुरक्षित");
    if (saveMsgTimer.current) clearTimeout(saveMsgTimer.current);
    saveMsgTimer.current = setTimeout(() => setSaveMsg(""), 2000);
  };

  // Persist global settings (AHWC name & district)
  useEffect(() => {
    localStorage.setItem(GLOBAL_KEY, JSON.stringify({ ahwcName, jila }));
  }, [ahwcName, jila]);

  // Persist current month data and sync master staff roster
  useEffect(() => {
    localStorage.setItem(monthKey(maah, varsh), JSON.stringify({ rows, karmachariRows }));
    saveStaffMaster(karmachariRows);
    showSaved();
  }, [rows, karmachariRows, maah, varsh]);

  // Safe Month Change Handler (flushes current month, then loads next)
  const handleMaahChange = (newMaah: string) => {
    localStorage.setItem(monthKey(maah, varsh), JSON.stringify({ rows, karmachariRows }));
    saveStaffMaster(karmachariRows);

    const targetData = loadMonth(newMaah, varsh);
    setMaah(newMaah);
    setRows(targetData.rows);
    setKarmachariRows(targetData.karmachariRows);
  };

  // Safe Year Change Handler
  const handleVarshChange = (newVarsh: string) => {
    localStorage.setItem(monthKey(maah, varsh), JSON.stringify({ rows, karmachariRows }));
    saveStaffMaster(karmachariRows);

    const targetData = loadMonth(maah, newVarsh);
    setVarsh(newVarsh);
    setRows(targetData.rows);
    setKarmachariRows(targetData.karmachariRows);
  };

  const handleReset = () => {
    if (!window.confirm(`क्या आप ${maah} ${varsh} का सारा डेटा हटाना चाहते हैं?\nयह क्रिया वापस नहीं होगी।`)) return;
    localStorage.removeItem(monthKey(maah, varsh));
    setRows(getDefaultRows());
    setKarmachariRows(getDefaultKarmachari());
    showToast("info", "डेटा रीसेट पूर्ण", `${maah} ${varsh} का सारा डेटा रीसेट कर दिया गया है।`);
  };

  const getSavedMonths = () => {
    const results: { maah: string; varsh: string; totalRashi: number; perfPct: number }[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (!key || !key.startsWith("ahwc_") || key === GLOBAL_KEY || key === STAFF_MASTER_KEY) continue;
      try {
        const raw = localStorage.getItem(key);
        if (!raw) continue;
        const data = JSON.parse(raw);
        const r = (data.rows || []) as { lakshya: string; prapti: string }[];
        const pcts = r.map((row: { lakshya: string; prapti: string }) => calcPercent(row.lakshya, row.prapti));
        const rashis = pcts.map(calcRashi);
        const tot = rashis.reduce((s: number, v: number) => s + v, 0);
        const perf = Math.round((tot / 5000) * 100 * 100) / 100;
        const parts = key.replace("ahwc_", "").split("_");
        results.push({ maah: parts[0], varsh: parts[1], totalRashi: tot, perfPct: perf });
      } catch { /* skip */ }
    }
    results.sort((a, b) => {
      const yi = parseInt(a.varsh) - parseInt(b.varsh);
      if (yi !== 0) return yi;
      return MONTHS.indexOf(a.maah) - MONTHS.indexOf(b.maah);
    });
    return results;
  };

  // One-click Copy Targets from Previous Month
  const handleCopyPrevTargets = () => {
    const prev = getPreviousMonth(maah, varsh);
    let prevData = loadMonth(prev.maah, prev.varsh);
    let foundMonth = `${prev.maah} ${prev.varsh}`;

    const hasTargets = prevData.rows.some(r => r.lakshya && r.lakshya.trim() !== "");

    if (!hasTargets) {
      const saved = getSavedMonths();
      const prevSaved = saved.filter(s => !(s.maah === maah && s.varsh === varsh));
      if (prevSaved.length > 0) {
        const mostRecent = prevSaved[prevSaved.length - 1];
        prevData = loadMonth(mostRecent.maah, mostRecent.varsh);
        foundMonth = `${mostRecent.maah} ${mostRecent.varsh}`;
      }
    }

    const validTargets = prevData.rows.some(r => r.lakshya && r.lakshya.trim() !== "");
    if (!validTargets) {
      showToast("info", "कोई पूर्व लक्ष्य नहीं मिला", "पिछले किसी माह में लक्ष्य दर्ज नहीं मिले। कृपया इस माह के लक्ष्य स्वयं दर्ज करें।");
      return;
    }

    setRows(current => current.map((row, idx) => ({
      ...row,
      lakshya: prevData.rows[idx]?.lakshya || row.lakshya,
    })));

    showToast("success", "लक्ष्य कॉपी हो गए", `${foundMonth} से लक्ष्य मान सफलतापूर्वक कॉपी किए गए।`);
  };

  const updateRow = (i: number, field: "lakshya" | "prapti", val: string) => {
    setRows(r => r.map((row, idx) => idx === i ? { ...row, [field]: val } : row));
  };

  const updateKarmachari = (i: number, field: keyof KarmachariRow, val: string) => {
    const sanitized = field === "ifsc" ? val.toUpperCase() : val;
    setKarmachariRows(r => {
      const updated = r.map((row, idx) => idx === i ? { ...row, [field]: sanitized } : row);
      saveStaffMaster(updated);
      return updated;
    });
  };

  const addKarmaRow = () => {
    setKarmachariRows(r => {
      const updated = [...r, { naam: "", pad: "ASHA", bank_khataa: "", bank_naam: "", ifsc: "", mobile: "" }];
      saveStaffMaster(updated);
      return updated;
    });
  };

  const removeKarmaRow = (i: number) => {
    if (karmachariRows.length <= 1) return;
    setKarmachariRows(r => {
      const updated = r.filter((_, idx) => idx !== i);
      saveStaffMaster(updated);
      return updated;
    });
  };

  // Calculations
  const percentArr = rows.map(r => calcPercent(r.lakshya, r.prapti));
  const rashiArr = percentArr.map(p => calcRashi(p));
  const totalRashi = rashiArr.reduce((s, v) => s + v, 0);
  const performancePercent = Math.round((totalRashi / 5000) * 100 * 100) / 100;

  const getPayment = (pad: string) => {
    const base = PAD_BASE[pad] || 0;
    return Math.round((performancePercent / 100) * base);
  };

  const validate = () => {
    const missing: string[] = [];
    if (!ahwcName.trim()) missing.push("AHWC का नाम आवश्यक है");
    if (!jila.trim()) missing.push("जिला आवश्यक है");
    if (missing.length > 0) {
      showToast(
        "error",
        "कृपया आवश्यक विवरण भरें",
        missing.join("\n")
      );
      return false;
    }
    return true;
  };

  // PDF Export at full standard natural scale
  const handlePDF = async () => {
    if (!validate()) return;
    setGenerating(true);
    try {
      await new Promise(r => setTimeout(r, 200));
      const html2pdf = (await import("html2pdf.js")).default;
      const element = document.getElementById("doc-page");
      if (!element) return;

      const scaler = element.closest(".a4-scaler") as HTMLElement | null;
      const prevTransform = element.style.transform;
      const prevMarginBottom = element.style.marginBottom;
      const prevScalerOverflow = scaler ? scaler.style.overflow : "";

      element.style.transform = "scale(1)";
      element.style.marginBottom = "0";
      if (scaler) scaler.style.overflow = "visible";

      await new Promise(r => setTimeout(r, 100));

      const opt = {
        margin: [4, 4, 4, 4],
        filename: `AHWC_Report_${ahwcName ? ahwcName.replace(/[\s/]/g, "_") + "_" : ""}${maah}_${varsh}.pdf`,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: {
          scale: 2,
          useCORS: true,
          letterRendering: true,
          scrollY: 0,
          width: 794,
          windowWidth: 794,
        },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
        pagebreak: { mode: ["css", "legacy"] },
      };

      await html2pdf().set(opt).from(element).save();

      element.style.transform = prevTransform;
      element.style.marginBottom = prevMarginBottom;
      if (scaler) scaler.style.overflow = prevScalerOverflow;
    } finally {
      setGenerating(false);
    }
  };

  const handlePrint = () => {
    if (!validate()) return;
    window.print();
  };

  // Backup & Restore
  const handleBackup = () => {
    const backupData: Record<string, any> = {};
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k && k.startsWith("ahwc_")) {
        try {
          backupData[k] = JSON.parse(localStorage.getItem(k) || "");
        } catch {
          backupData[k] = localStorage.getItem(k);
        }
      }
    }
    const blob = new Blob([JSON.stringify(backupData, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `AHWC_Backup_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast("success", "बैकअप डाउनलोड हुआ", "आपका बैकअप सुरक्षित डाउनलोड हो गया है।");
  };

  const handleRestore = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const data = JSON.parse(event.target?.result as string);
        if (typeof data !== "object" || !data) throw new Error("Invalid format");
        Object.keys(data).forEach((k) => {
          if (k.startsWith("ahwc_")) {
            const val = typeof data[k] === "string" ? data[k] : JSON.stringify(data[k]);
            localStorage.setItem(k, val);
          }
        });
        showToast("success", "डेटा रीस्टोर पूर्ण", "डेटा सफलतापूर्वक रीस्टोर हो गया। पेज रीलोड हो रहा है...");
        setTimeout(() => window.location.reload(), 1200);
      } catch (err) {
        showToast("error", "रीस्टोर विफल", "बैकअप फ़ाइल लोड करने में त्रुटि। कृपया सही JSON फ़ाइल चुनें।");
      }
    };
    reader.readAsText(file);
    e.target.value = "";
  };

  return (
    <div className="outer-wrap">
      {generating && (
        <div className="overlay">
          <div className="overlay-box">
            <div className="spin" />
            PDF तैयार हो रहा है...
          </div>
        </div>
      )}

      {/* Apple-style Light Frosted Glass Notification Toast */}
      {toast && (
        <div className="apple-toast-container">
          <div className={`apple-toast apple-toast-${toast.type}`} onClick={() => setToast(null)}>
            <div className="apple-toast-icon">
              {toast.type === "error" && <AlertCircle size={20} className="icon-error" />}
              {toast.type === "success" && <CheckCircle2 size={20} className="icon-success" />}
              {toast.type === "info" && <Info size={20} className="icon-info-toast" />}
            </div>
            <div className="apple-toast-body">
              <div className="apple-toast-title">{toast.title}</div>
              {toast.message && <div className="apple-toast-message">{toast.message}</div>}
            </div>
            <button className="apple-toast-close" onClick={() => setToast(null)} aria-label="बंद करें">
              <X size={15} />
            </button>
          </div>
        </div>
      )}

      {/* Hidden file input for restore */}
      <input
        type="file"
        ref={restoreFileRef}
        style={{ display: "none" }}
        accept=".json"
        onChange={handleRestore}
      />

      {/* ===== HISTORY MODAL ===== */}
      {showHistory && (() => {
        const saved = getSavedMonths();
        return (
          <div className="hist-overlay" onClick={() => setShowHistory(false)}>
            <div className="hist-modal" onClick={e => e.stopPropagation()}>
              <div className="hist-header">
                <div className="hist-title">
                  <FolderOpen size={18} />
                  <span>सहेजे गए माह</span>
                </div>
                <button className="hist-close" onClick={() => setShowHistory(false)}>
                  <X size={18} />
                </button>
              </div>
              {saved.length === 0 ? (
                <div className="hist-empty">अभी तक कोई डेटा सहेजा नहीं गया।</div>
              ) : (
                <table className="hist-table">
                  <thead>
                    <tr>
                      <th>माह</th>
                      <th>वर्ष</th>
                      <th>प्रदर्शन %</th>
                      <th>कुल राशि (₹)</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {saved.map((s, i) => (
                      <tr key={i} className={s.maah === maah && s.varsh === varsh ? "hist-active" : ""}>
                        <td>{s.maah}</td>
                        <td>{s.varsh}</td>
                        <td style={{ fontWeight: 700, color: s.perfPct >= 70 ? "#16a34a" : s.perfPct >= 31 ? "#d97706" : "#dc2626" }}>
                          {s.perfPct.toFixed(2)}%
                        </td>
                        <td style={{ fontWeight: 700 }}>₹{s.totalRashi.toLocaleString("en-IN")}</td>
                        <td>
                          <button
                            className="hist-open-btn"
                            onClick={() => {
                              const data = loadMonth(s.maah, s.varsh);
                              setMaah(s.maah);
                              setVarsh(s.varsh);
                              setRows(data.rows);
                              setKarmachariRows(data.karmachariRows);
                              setShowHistory(false);
                            }}
                          >
                            <span>खोलें</span>
                            <ArrowRight size={14} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        );
      })()}

      {/* ===== LEFT PANE: DATA ENTRY FORM PANEL ===== */}
      <div className="form-panel no-print">
        <div className="form-panel-header">
          <div className="header-title-box">
            <ClipboardList size={20} className="header-icon" />
            <span className="header-title-text">AHWC मासिक प्रदर्शन रिपोर्ट — डेटा प्रविष्टि</span>
          </div>

          <div className="header-actions">
            {saveMsg && (
              <span className="save-msg">
                <CheckCircle2 size={13} />
                <span>{saveMsg}</span>
              </span>
            )}
            <button className="btn-hist-header" onClick={() => setShowHistory(true)} title="सहेजे गए सभी माह देखें">
              <FolderOpen size={14} />
              <span>माह इतिहास</span>
            </button>
            <button className="btn-util-header" onClick={handleBackup} title="डेटा बैकअप फ़ाइल डाउनलोड करें">
              <Download size={14} />
              <span>बैकअप</span>
            </button>
            <button className="btn-util-header" onClick={() => restoreFileRef.current?.click()} title="पहले का बैकअप रीस्टोर करें">
              <Upload size={14} />
              <span>रीस्टोर</span>
            </button>
          </div>
        </div>

        <div className="form-inner">
          {/* Top Summary Bar */}
          <div className="top-action-bar">
            <div className="quick-summary">
              <span>प्रदर्शन: <strong>{performancePercent.toFixed(2)}%</strong></span>
              <span>कुल प्रोत्साहन राशि: <strong>₹{totalRashi.toLocaleString("en-IN")}</strong></span>
              <span>कुल कर्मचारी भुगतान: <strong>₹{karmachariRows.reduce((s, r) => s + getPayment(r.pad), 0).toLocaleString("en-IN")}</strong></span>
            </div>
          </div>

          <div className="field-grid">
            <div className="field-group">
              <label>AHWC का नाम <span className="req">*</span></label>
              <input
                type="text"
                value={ahwcName}
                onChange={e => setAhwcName(e.target.value)}
                placeholder="जैसे: AHWC खजूरी बाजार"
              />
            </div>
            <div className="field-group">
              <label>जिला <span className="req">*</span></label>
              <input
                type="text"
                value={jila}
                onChange={e => setJila(e.target.value)}
                placeholder="जैसे: रायपुर"
              />
            </div>
            <div className="field-group">
              <label>माह</label>
              <select value={maah} onChange={e => handleMaahChange(e.target.value)}>
                {MONTHS.map(m => <option key={m} value={m}>{m}</option>)}
              </select>
            </div>
            <div className="field-group">
              <label>वर्ष</label>
              <select value={varsh} onChange={e => handleVarshChange(e.target.value)}>
                {YEAR_OPTIONS.map(y => <option key={y} value={y}>{y}</option>)}
              </select>
            </div>
          </div>

          {/* Table 1: Goals and Achievements */}
          <div className="sec-label">
            <div className="sec-label-left">
              <div className="sec-title-with-icon">
                <BarChart3 size={17} className="sec-icon" />
                <span>तालिका 1 — लक्ष्य एवं प्राप्ति (सूचक मूल्यांकन)</span>
              </div>
              <span className="sec-hint">लक्ष्य व प्राप्ति दर्ज करें, प्रतिशत व राशि स्वतः आ जाएगी</span>
            </div>
            <button
              type="button"
              className="btn-copy-targets"
              onClick={handleCopyPrevTargets}
              title="पिछले माह के लक्ष्य मान स्वतः कॉपी करें"
            >
              <Copy size={13} />
              <span>पिछले माह के लक्ष्य कॉपी करें</span>
            </button>
          </div>

          <div className="tbl-scroll">
            <table className="inp-table">
              <thead>
                <tr>
                  <th style={{ width: 36 }}>क्र.</th>
                  <th style={{ minWidth: 220, textAlign: "left", paddingLeft: 10 }}>कार्य / सूचक का नाम</th>
                  <th style={{ width: 90 }}>लक्ष्य</th>
                  <th style={{ width: 90 }}>प्राप्ति</th>
                  <th style={{ width: 95 }}>प्रतिशत</th>
                  <th style={{ width: 90 }}>राशि (₹)</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => {
                  const pct = percentArr[i];
                  const rsh = rashiArr[i];
                  return (
                    <tr key={i}>
                      <td className="sno">{i + 1}</td>
                      <td className="karya-name">{KARYA_NAMES[i]}</td>
                      <td>
                        <input
                          type="number"
                          min="0"
                          value={row.lakshya}
                          onChange={e => updateRow(i, "lakshya", e.target.value)}
                          placeholder="0"
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          min="0"
                          value={row.prapti}
                          onChange={e => updateRow(i, "prapti", e.target.value)}
                          placeholder="0"
                        />
                      </td>
                      <td className="pct-cell">{pct.toFixed(2)}%</td>
                      <td className="rashi-cell">₹{rsh}</td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={4} style={{ textAlign: "right", fontWeight: 700, padding: "8px 12px" }}>
                    कुल प्रदर्शन प्रतिशत:
                  </td>
                  <td className="pct-cell" style={{ fontWeight: 700 }}>{performancePercent.toFixed(2)}%</td>
                  <td style={{ fontWeight: 700, color: "#1a472a", fontSize: "0.9rem" }}>₹{totalRashi}</td>
                </tr>
              </tfoot>
            </table>
          </div>

          {/* Table 2: Employee Payment Details */}
          <div className="sec-label">
            <div className="sec-label-left">
              <div className="sec-title-with-icon">
                <Users size={17} className="sec-icon" />
                <span>तालिका 2 — कर्मचारी विवरण एवं भुगतान</span>
              </div>
              <span className="sec-hint">कर्मचारियों के नाम व बैंक विवरण माह बदलने पर स्वतः सुरक्षित रहते हैं</span>
            </div>
          </div>

          <div className="tbl-scroll">
            <table className="inp-table">
              <thead>
                <tr>
                  <th style={{ width: 32 }}>क्र.</th>
                  <th style={{ minWidth: 140 }}>नाम</th>
                  <th style={{ width: 115 }}>पद</th>
                  <th style={{ minWidth: 140 }}>बैंक खाता संख्या</th>
                  <th style={{ minWidth: 120 }}>बैंक का नाम</th>
                  <th style={{ width: 110 }}>IFSC कोड</th>
                  <th style={{ width: 110 }}>मोबाइल नंबर</th>
                  <th style={{ width: 95 }}>भुगतान (₹)</th>
                  <th style={{ width: 36 }}>—</th>
                </tr>
              </thead>
              <tbody>
                {karmachariRows.map((row, i) => {
                  const pay = getPayment(row.pad);

                  return (
                    <tr key={i}>
                      <td className="sno">{i + 1}</td>
                      <td>
                        <input
                          type="text"
                          value={row.naam}
                          onChange={e => updateKarmachari(i, "naam", e.target.value)}
                          placeholder="नाम दर्ज करें"
                          style={{ textAlign: "left" }}
                        />
                      </td>
                      <td>
                        <select value={row.pad} onChange={e => updateKarmachari(i, "pad", e.target.value)}>
                          <option value="">-- चुनें --</option>
                          <option value="AMO">AMO</option>
                          <option value="ANM">ANM</option>
                          <option value="ASHA">ASHA</option>
                          <option value="नर्स/कम्पा">नर्स/कम्पा</option>
                        </select>
                      </td>
                      <td>
                        <input
                          type="text"
                          value={row.bank_khataa}
                          onChange={e => updateKarmachari(i, "bank_khataa", e.target.value)}
                          placeholder="खाता संख्या"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          value={row.bank_naam}
                          onChange={e => updateKarmachari(i, "bank_naam", e.target.value)}
                          placeholder="बैंक नाम"
                          style={{ textAlign: "left" }}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          value={row.ifsc}
                          onChange={e => updateKarmachari(i, "ifsc", e.target.value)}
                          placeholder="IFSC"
                          style={{ textTransform: "uppercase" }}
                        />
                      </td>
                      <td>
                        <input
                          type="tel"
                          value={row.mobile}
                          onChange={e => updateKarmachari(i, "mobile", e.target.value)}
                          placeholder="मोबाइल"
                        />
                      </td>
                      <td className="rashi-cell">₹{pay.toLocaleString("en-IN")}</td>
                      <td>
                        <button
                          className="rm-btn"
                          onClick={() => removeKarmaRow(i)}
                          disabled={karmachariRows.length <= 1}
                          title="हटाएं"
                        >
                          <Trash2 size={13} />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={7} style={{ textAlign: "right", fontWeight: 700, padding: "8px 12px" }}>
                    कुल कर्मचारी भुगतान:
                  </td>
                  <td style={{ fontWeight: 700, color: "#1a472a", fontSize: "0.9rem" }}>
                    ₹{karmachariRows.reduce((s, r) => s + getPayment(r.pad), 0).toLocaleString("en-IN")}
                  </td>
                  <td></td>
                </tr>
              </tfoot>
            </table>
          </div>

          <div className="table-controls-row">
            <button className="add-row-btn" onClick={addKarmaRow}>
              <UserPlus size={15} />
              <span>कर्मचारी जोड़ें</span>
            </button>
            <span className="staff-persist-note">
              <Info size={14} className="icon-info" />
              <span>कर्मचारियों के नाम, पद व खाता संख्या अगले महीने में भी स्वतः आ जाएंगे।</span>
            </span>
          </div>

          {/* Unified Action Button Row (Bottom Only) */}
          <div className="gen-btn-row">
            <button className="btn-pdf" onClick={handlePDF}>
              <FileDown size={17} />
              <span>PDF डाउनलोड</span>
            </button>
            <button className="btn-print" onClick={handlePrint}>
              <Printer size={17} />
              <span>Print</span>
            </button>
            <button className="btn-stamp" onClick={() => setShowStamp(s => !s)}>
              {showStamp ? <X size={16} /> : <Stamp size={16} />}
              <span>{showStamp ? "स्टाम्प हटाएं" : "मुहर / स्टाम्प बॉक्स"}</span>
            </button>
            <button className="btn-reset" onClick={handleReset} title="इस माह का सारा डेटा रीसेट करें">
              <RotateCcw size={16} />
              <span>Reset</span>
            </button>
          </div>
        </div>
      </div>

      {/* ===== RIGHT PANE: DOCUMENT PREVIEW (STICKY ON DESKTOP) ===== */}
      <div className="preview-wrap">
        <div className="preview-header-bar no-print">
          <div className="preview-label">
            <FileText size={16} />
            <span>दस्तावेज़ प्रीव्यू (A4 लाइव)</span>
          </div>

          <div className="zoom-controls">
            <button
              className={`zoom-btn ${previewZoom === "fit" ? "zoom-active" : ""}`}
              onClick={() => setPreviewZoom("fit")}
            >
              Fit Screen
            </button>
            <button
              className={`zoom-btn ${previewZoom === "100%" ? "zoom-active" : ""}`}
              onClick={() => setPreviewZoom("100%")}
            >
              100%
            </button>
          </div>
        </div>

        <div className="a4-scaler" ref={scalerRef}>
          <div
            id="doc-page"
            className="doc-page"
            style={{
              transform: `scale(${previewScale})`,
              transformOrigin: "top center",
              marginBottom: `${(previewScale - 1) * 1123}px`,
            }}
          >
            <div className="doc-header">
              <div className="doc-title-top">आयुष्मान आरोग्य मंदिर (AHWC)</div>
              <div className="doc-title-main">मासिक प्रदर्शन आधारित प्रोत्साहन रिपोर्ट (PLP)</div>
            </div>

            <div className="doc-info-row">
              <div className="doc-info-item">
                <span className="dil">AHWC नाम:</span>
                <span className="div">{ahwcName || "________________________"}</span>
              </div>
              <div className="doc-info-item">
                <span className="dil">जिला:</span>
                <span className="div">{jila || "____________"}</span>
              </div>
              <div className="doc-info-item">
                <span className="dil">माह एवं वर्ष:</span>
                <span className="div">{maah} {varsh}</span>
              </div>
            </div>

            <div className="doc-tbl-title">तालिका 1 — कार्य विवरण एवं प्रदर्शन</div>
            <table className="doc-tbl">
              <thead>
                <tr>
                  <th style={{ width: "30px" }}>क्र.</th>
                  <th>कार्य / सूचक का नाम</th>
                  <th style={{ width: "52px" }}>लक्ष्य</th>
                  <th style={{ width: "52px" }}>प्राप्ति</th>
                  <th style={{ width: "62px" }}>प्रतिशत</th>
                  <th style={{ width: "58px" }}>राशि (₹)</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={i}>
                    <td style={{ textAlign: "center" }}>{i + 1}</td>
                    <td style={{ textAlign: "left", fontSize: "0.68rem" }}>{KARYA_NAMES[i]}</td>
                    <td style={{ textAlign: "center" }}>{row.lakshya || "—"}</td>
                    <td style={{ textAlign: "center" }}>{row.prapti || "—"}</td>
                    <td style={{ textAlign: "center", fontWeight: 600 }}>{percentArr[i].toFixed(2)}%</td>
                    <td style={{ textAlign: "center", fontWeight: 600 }}>₹{rashiArr[i]}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="doc-tbl-foot">
                  <td colSpan={4} style={{ textAlign: "right", fontSize: "0.7rem" }}>
                    प्रदर्शन प्रतिशत: {performancePercent.toFixed(2)}%
                  </td>
                  <td colSpan={2} style={{ textAlign: "center", fontWeight: 700 }}>
                    ₹{totalRashi}
                  </td>
                </tr>
              </tfoot>
            </table>

            <div className="doc-tbl-title">तालिका 2 — कर्मचारी भुगतान विवरण</div>
            <table className="doc-tbl doc-tbl-sm">
              <thead>
                <tr>
                  <th style={{ width: "24px" }}>क्र.</th>
                  <th style={{ minWidth: "85px" }}>नाम</th>
                  <th style={{ width: "65px" }}>पद</th>
                  <th style={{ width: "95px" }}>बैंक खाता</th>
                  <th style={{ width: "75px" }}>बैंक नाम</th>
                  <th style={{ width: "65px" }}>IFSC</th>
                  <th style={{ width: "70px" }}>मोबाइल</th>
                  <th style={{ width: "60px" }}>भुगतान (₹)</th>
                </tr>
              </thead>
              <tbody>
                {karmachariRows.map((row, i) => (
                  <tr key={i}>
                    <td style={{ textAlign: "center" }}>{i + 1}</td>
                    <td style={{ textAlign: "left" }}>{row.naam || "________________"}</td>
                    <td style={{ textAlign: "center", fontWeight: 600 }}>{row.pad}</td>
                    <td style={{ textAlign: "center" }}>{row.bank_khataa || "____________"}</td>
                    <td style={{ textAlign: "left" }}>{row.bank_naam || "____________"}</td>
                    <td style={{ textAlign: "center" }}>{row.ifsc || "________"}</td>
                    <td style={{ textAlign: "center" }}>{row.mobile || "__________"}</td>
                    <td style={{ textAlign: "center", fontWeight: 600 }}>₹{getPayment(row.pad).toLocaleString("en-IN")}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="doc-tbl-foot">
                  <td colSpan={7} style={{ textAlign: "right", fontSize: "0.68rem" }}>कुल भुगतान राशि:</td>
                  <td style={{ textAlign: "center", fontWeight: 700 }}>
                    ₹{karmachariRows.reduce((s, r) => s + getPayment(r.pad), 0).toLocaleString("en-IN")}
                  </td>
                </tr>
              </tfoot>
            </table>

            <div className="doc-certify">
              प्रमाणित किया जाता है कि उपर्युक्त सूची में अंकित AMO, नर्स-कंपाउंडर, ए.एन.एम. व आशा कार्मिकों द्वारा माह {maah} {varsh} में मूल्यांकन सूचकों के अनुसार कार्य संपादित किया गया है एवं इससे सम्बन्धित रिकॉर्ड सुरक्षित रख लिया गया है। अतः संबंधित को निर्धारित मासिक दर से पी.एल.पी. का भुगतान किए जाने की अनुशंसा की जाती है।
            </div>

            <div className="doc-sig">
              <div className="sig-block">
                <div className="sig-line-area"></div>
                <div className="sig-text">
                  हस्ताक्षर प्रभारी अधिकारी<br />
                  AHWC - {ahwcName || "______________"}
                </div>
              </div>
              {showStamp && (
                <div className="stamp-box">
                  <span className="stamp-label">मुहर / Stamp</span>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="screen-footer no-print">
          Made By Peeyush Singh, Assistant Accounts Officer II
        </div>
      </div>
    </div>
  );
}
