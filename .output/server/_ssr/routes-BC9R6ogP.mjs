import { n as __toESM } from "../_runtime.mjs";
import { n as AnimatePresence, t as motion } from "../_libs/framer-motion+[...].mjs";
import { r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { a as ChevronDown, i as MapPin, n as Volume2, r as Navigation, t as VolumeX } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BC9R6ogP.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var bg08_default = "/assets/bg08-BC0EmKFm.jpg";
var _jsxFileName$9 = "/app/applet/src/components/FallingPetals.tsx";
var FallingPetals = () => {
	const [petals, setPetals] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		setPetals(Array.from({ length: 6 }, (_, i) => ({
			id: i,
			left: 5 + Math.random() * 90,
			delay: Math.random() * 4,
			duration: 9 + Math.random() * 6,
			size: 16 + Math.random() * 16,
			rotate: 180 + Math.random() * 360,
			drift: (Math.random() * 2 - 1) * 45
		})));
	}, []);
	if (petals.length === 0) return null;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "absolute inset-0 pointer-events-none overflow-hidden z-10 w-full h-full",
		children: petals.map((petal) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "petal-particle",
			style: {
				left: `${petal.left}%`,
				animationDuration: `${petal.duration}s`,
				animationDelay: `${petal.delay}s`,
				"--petal-drift": `${petal.drift}px`,
				"--petal-rotate": `${petal.rotate}deg`
			},
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
				width: petal.size,
				height: petal.size,
				viewBox: "0 0 24 24",
				fill: "none",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
					d: "M12 2C12 2 8 6 8 12C8 18 12 22 12 22C12 22 16 18 16 12C16 6 12 2 12 2Z",
					fill: "#FDF5F2",
					opacity: "0.85"
				}, void 0, false, {
					fileName: _jsxFileName$9,
					lineNumber: 50,
					columnNumber: 13
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName$9,
				lineNumber: 49,
				columnNumber: 11
			}, void 0)
		}, petal.id, false, {
			fileName: _jsxFileName$9,
			lineNumber: 36,
			columnNumber: 9
		}, void 0))
	}, void 0, false, {
		fileName: _jsxFileName$9,
		lineNumber: 34,
		columnNumber: 5
	}, void 0);
};
var wholeBismillahSection_default = "/assets/wholeBismillahSection-DiP7KyC7.png";
var inshaAllah_brownn_default = "/assets/inshaAllah-brownn-TEAqcHNx.png";
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var _jsxFileName$8 = "/app/applet/src/components/ScrollSection.tsx";
var ScrollSection = ({ children, className = "", delay = 0, isFirst = false }) => {
	const ref = (0, import_react.useRef)(null);
	const [isVisible, setIsVisible] = (0, import_react.useState)(isFirst);
	(0, import_react.useEffect)(() => {
		if (isFirst) return;
		const el = ref.current;
		if (!el) return;
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				setIsVisible(true);
				observer.unobserve(entry.target);
			}
		}, {
			threshold: .25,
			rootMargin: "0px 0px -15% 0px"
		});
		observer.observe(el);
		return () => observer.disconnect();
	}, [isFirst]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		ref,
		style: { transitionDelay: `${delay}ms` },
		className: cn("min-h-[85vh] w-full flex flex-col items-center justify-center py-16 px-4 relative overflow-visible transition-all duration-1200 ease-out", isVisible ? "opacity-100 blur-0 scale-100 translate-y-0" : "opacity-0 translate-y-12", className),
		children
	}, void 0, false, {
		fileName: _jsxFileName$8,
		lineNumber: 40,
		columnNumber: 5
	}, void 0);
};
var _jsxFileName$7 = "/app/applet/src/components/NikkahCard.tsx";
var NikkahCard = () => {
	const containerRef = (0, import_react.useRef)(null);
	const [size, setSize] = (0, import_react.useState)({
		width: 300,
		height: 265
	});
	(0, import_react.useEffect)(() => {
		if (!containerRef.current) return;
		const updateSize = () => {
			if (containerRef.current) {
				const rect = containerRef.current.getBoundingClientRect();
				if (rect.width > 0 && rect.height > 0) setSize({
					width: Math.round(rect.width),
					height: Math.round(rect.height)
				});
			}
		};
		updateSize();
		const ro = new ResizeObserver((entries) => {
			for (const entry of entries) if (entry.contentRect.width > 0 && entry.contentRect.height > 0) setSize({
				width: Math.round(entry.contentRect.width),
				height: Math.round(entry.contentRect.height)
			});
		});
		ro.observe(containerRef.current);
		return () => ro.disconnect();
	}, []);
	const w = size.width;
	const h = size.height;
	const cornerPad = 30;
	const step = 5;
	const rOuter = 25;
	const inset = 4.5;
	const rInner = 20.5;
	const outerPath = [
		`M ${cornerPad} 0`,
		`L ${w - cornerPad} 0`,
		`L ${w - cornerPad} ${step}`,
		`A ${rOuter} ${rOuter} 0 0 1 ${w - step} ${cornerPad}`,
		`L ${w} ${cornerPad}`,
		`L ${w} ${h - cornerPad}`,
		`L ${w - step} ${h - cornerPad}`,
		`A ${rOuter} ${rOuter} 0 0 1 ${w - cornerPad} ${h - step}`,
		`L ${w - cornerPad} ${h}`,
		`L ${cornerPad} ${h}`,
		`L ${cornerPad} ${h - step}`,
		`A ${rOuter} ${rOuter} 0 0 1 ${step} ${h - cornerPad}`,
		`L 0 ${h - cornerPad}`,
		`L 0 ${cornerPad}`,
		`L ${step} ${cornerPad}`,
		`A ${rOuter} ${rOuter} 0 0 1 ${cornerPad} ${step}`,
		`L ${cornerPad} 0`,
		"Z"
	].join(" ");
	const innerPath = [
		`M ${cornerPad} ${inset}`,
		`L ${w - cornerPad} ${inset}`,
		`L ${w - cornerPad} 9.5`,
		`A ${rInner} ${rInner} 0 0 1 ${w - inset - step} ${cornerPad}`,
		`L ${w - inset} ${cornerPad}`,
		`L ${w - inset} ${h - cornerPad}`,
		`L ${w - inset - step} ${h - cornerPad}`,
		`A ${rInner} ${rInner} 0 0 1 ${w - cornerPad} ${h - inset - step}`,
		`L ${w - cornerPad} ${h - inset}`,
		`L ${cornerPad} ${h - inset}`,
		`L ${cornerPad} ${h - inset - step}`,
		`A ${rInner} ${rInner} 0 0 1 9.5 ${h - cornerPad}`,
		`L ${inset} ${h - cornerPad}`,
		`L ${inset} ${cornerPad}`,
		`L 9.5 ${cornerPad}`,
		`A ${rInner} ${rInner} 0 0 1 ${cornerPad} 9.5`,
		`L ${cornerPad} ${inset}`,
		"Z"
	].join(" ");
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "relative w-full max-w-[320px] min-[360px]:max-w-[340px] mx-auto py-1.5 font-bold",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			ref: containerRef,
			className: "relative w-full filter drop-shadow-[0_10px_28px_rgba(122,50,69,0.11)] font-bold",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
				className: "absolute inset-0 w-full h-full pointer-events-none z-0",
				width: w,
				height: h,
				viewBox: `0 0 ${w} ${h}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("defs", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("linearGradient", {
						id: "cardParchmentGrad",
						x1: "0",
						y1: "0",
						x2: "0",
						y2: "1",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("stop", {
								offset: "0%",
								stopColor: "#FFF9FA",
								stopOpacity: "0.8"
							}, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 104,
								columnNumber: 15
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("stop", {
								offset: "50%",
								stopColor: "#FFF4F6",
								stopOpacity: "0.8"
							}, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 105,
								columnNumber: 15
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("stop", {
								offset: "100%",
								stopColor: "#FCEEEF",
								stopOpacity: "0.8"
							}, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 106,
								columnNumber: 15
							}, void 0)
						]
					}, void 0, true, {
						fileName: _jsxFileName$7,
						lineNumber: 103,
						columnNumber: 13
					}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("linearGradient", {
						id: "goldBorderGrad",
						x1: "0",
						y1: "0",
						x2: "1",
						y2: "1",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("stop", {
								offset: "0%",
								stopColor: "#E2A5B3"
							}, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 109,
								columnNumber: 15
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("stop", {
								offset: "50%",
								stopColor: "#C88595"
							}, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 110,
								columnNumber: 15
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("stop", {
								offset: "100%",
								stopColor: "#A86273"
							}, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 111,
								columnNumber: 15
							}, void 0)
						]
					}, void 0, true, {
						fileName: _jsxFileName$7,
						lineNumber: 108,
						columnNumber: 13
					}, void 0)] }, void 0, true, {
						fileName: _jsxFileName$7,
						lineNumber: 102,
						columnNumber: 11
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
						d: outerPath,
						fill: "url(#cardParchmentGrad)",
						stroke: "url(#goldBorderGrad)",
						strokeWidth: "1.6"
					}, void 0, false, {
						fileName: _jsxFileName$7,
						lineNumber: 116,
						columnNumber: 11
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
						d: innerPath,
						fill: "none",
						stroke: "#D69EA9",
						strokeWidth: "1",
						strokeOpacity: "0.85"
					}, void 0, false, {
						fileName: _jsxFileName$7,
						lineNumber: 124,
						columnNumber: 11
					}, void 0)
				]
			}, void 0, true, {
				fileName: _jsxFileName$7,
				lineNumber: 96,
				columnNumber: 9
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "relative z-10 px-4 pt-4 pb-3.5 min-[360px]:pt-5 min-[360px]:pb-4 text-center flex flex-col items-center font-bold",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
						className: "text-4xl min-[360px]:text-[44px] sm:text-5xl text-[#7A3245] leading-tight mb-2 select-none font-bold",
						style: {
							fontFamily: "'Great Vibes', cursive",
							fontWeight: 700
						},
						children: "Nikkah"
					}, void 0, false, {
						fileName: _jsxFileName$7,
						lineNumber: 130,
						columnNumber: 11
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center justify-center gap-3 min-[360px]:gap-4 w-full max-w-[280px] mx-auto my-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "text-center flex flex-col items-center justify-center flex-1 min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-xs min-[360px]:text-sm tracking-[0.18em] uppercase text-[#7A3245] font-bold whitespace-nowrap block text-center",
									style: {
										fontFamily: "'Cormorant Garamond', serif",
										fontWeight: 700
									},
									children: "Sunday"
								}, void 0, false, {
									fileName: _jsxFileName$7,
									lineNumber: 141,
									columnNumber: 15
								}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-base min-[360px]:text-lg text-[#9E5A6C] mt-1 whitespace-nowrap block font-bold text-center",
									style: {
										fontFamily: "'Reem Kufi', 'Amiri', serif",
										fontWeight: 700
									},
									dir: "rtl",
									lang: "ar",
									children: "الأحد"
								}, void 0, false, {
									fileName: _jsxFileName$7,
									lineNumber: 147,
									columnNumber: 15
								}, void 0)]
							}, void 0, true, {
								fileName: _jsxFileName$7,
								lineNumber: 140,
								columnNumber: 13
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-12 min-[360px]:h-14 w-px shrink-0 bg-[#9E5A6C]/40" }, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 158,
								columnNumber: 13
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center justify-center w-14 min-[360px]:w-16 shrink-0",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-5xl min-[360px]:text-6xl sm:text-[60px] text-[#7A3245] leading-none font-serif font-extrabold",
									style: {
										fontFamily: "'Cormorant Garamond', serif",
										fontWeight: 800
									},
									children: "24"
								}, void 0, false, {
									fileName: _jsxFileName$7,
									lineNumber: 162,
									columnNumber: 15
								}, void 0)
							}, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 161,
								columnNumber: 13
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-12 min-[360px]:h-14 w-px shrink-0 bg-[#9E5A6C]/40" }, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 171,
								columnNumber: 13
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "text-center flex flex-col items-center justify-center flex-1 min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-xs min-[360px]:text-sm tracking-[0.18em] uppercase text-[#7A3245] font-bold whitespace-nowrap block text-center",
									style: {
										fontFamily: "'Cormorant Garamond', serif",
										fontWeight: 700
									},
									children: "January"
								}, void 0, false, {
									fileName: _jsxFileName$7,
									lineNumber: 175,
									columnNumber: 15
								}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-sm min-[360px]:text-base tracking-[0.2em] text-[#9E5A6C] mt-1 whitespace-nowrap block font-bold text-center",
									style: {
										fontFamily: "'Cormorant Garamond', serif",
										fontWeight: 700
									},
									children: "2027"
								}, void 0, false, {
									fileName: _jsxFileName$7,
									lineNumber: 181,
									columnNumber: 15
								}, void 0)]
							}, void 0, true, {
								fileName: _jsxFileName$7,
								lineNumber: 174,
								columnNumber: 13
							}, void 0)
						]
					}, void 0, true, {
						fileName: _jsxFileName$7,
						lineNumber: 138,
						columnNumber: 11
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center justify-center gap-2 w-full max-w-[210px] mx-auto my-1.5 min-[360px]:my-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 h-[1px] bg-[#9E5A6C]/35" }, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 192,
								columnNumber: 13
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
								className: "w-3.5 h-3 text-[#9E5A6C] shrink-0 opacity-90",
								viewBox: "0 0 24 20",
								fill: "currentColor",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M12 0C12 0 9.5 4 9.5 8C9.5 10 10.5 11 12 12C13.5 11 14.5 10 14.5 8C14.5 4 12 0 12 0Z" }, void 0, false, {
										fileName: _jsxFileName$7,
										lineNumber: 198,
										columnNumber: 15
									}, void 0),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M4 11C4 11 7 8 10 10C9.5 11.5 8.5 12.5 6.5 12.5C5 12.5 4 11 4 11Z" }, void 0, false, {
										fileName: _jsxFileName$7,
										lineNumber: 199,
										columnNumber: 15
									}, void 0),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M20 11C20 11 17 8 14 10C14.5 11.5 15.5 12.5 17.5 12.5C19 12.5 20 11 20 11Z" }, void 0, false, {
										fileName: _jsxFileName$7,
										lineNumber: 200,
										columnNumber: 15
									}, void 0),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
										cx: "12",
										cy: "14",
										r: "1.5"
									}, void 0, false, {
										fileName: _jsxFileName$7,
										lineNumber: 201,
										columnNumber: 15
									}, void 0)
								]
							}, void 0, true, {
								fileName: _jsxFileName$7,
								lineNumber: 193,
								columnNumber: 13
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 h-[1px] bg-[#9E5A6C]/35" }, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 203,
								columnNumber: 13
							}, void 0)
						]
					}, void 0, true, {
						fileName: _jsxFileName$7,
						lineNumber: 191,
						columnNumber: 11
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex flex-col items-center gap-0.5 my-0.5 font-bold",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-sm min-[360px]:text-[15px] text-[#7A3245] font-bold tracking-wide",
							style: {
								fontFamily: "'Amiri', 'Aref Ruqaa', serif",
								fontWeight: 700
							},
							dir: "rtl",
							lang: "ar",
							children: "١٦ شعبان ١٤٤٨ هـ"
						}, void 0, false, {
							fileName: _jsxFileName$7,
							lineNumber: 208,
							columnNumber: 13
						}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-[9px] min-[360px]:text-[10px] tracking-[0.16em] uppercase text-[#9E5A6C] font-bold",
							style: {
								fontFamily: "'Cormorant Garamond', serif",
								fontWeight: 700
							},
							children: "16 Shaʿbān 1448 AH"
						}, void 0, false, {
							fileName: _jsxFileName$7,
							lineNumber: 216,
							columnNumber: 13
						}, void 0)]
					}, void 0, true, {
						fileName: _jsxFileName$7,
						lineNumber: 207,
						columnNumber: 11
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-3 inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-[#FCE8ED]/85 border border-[#E5B8C3] shadow-[0_2px_8px_rgba(122,50,69,0.06)] backdrop-blur-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-[#9E5A6C] text-[10px]",
								children: "✤"
							}, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 226,
								columnNumber: 13
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-[11px] min-[360px]:text-xs tracking-[0.2em] font-bold uppercase text-[#7A3245]",
								style: {
									fontFamily: "'Cinzel', serif",
									fontWeight: 700
								},
								children: "6:30 PM"
							}, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 227,
								columnNumber: 13
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-[#9E5A6C] text-[10px]",
								children: "✤"
							}, void 0, false, {
								fileName: _jsxFileName$7,
								lineNumber: 233,
								columnNumber: 13
							}, void 0)
						]
					}, void 0, true, {
						fileName: _jsxFileName$7,
						lineNumber: 225,
						columnNumber: 11
					}, void 0)
				]
			}, void 0, true, {
				fileName: _jsxFileName$7,
				lineNumber: 128,
				columnNumber: 9
			}, void 0)]
		}, void 0, true, {
			fileName: _jsxFileName$7,
			lineNumber: 91,
			columnNumber: 7
		}, void 0)
	}, void 0, false, {
		fileName: _jsxFileName$7,
		lineNumber: 89,
		columnNumber: 5
	}, void 0);
};
var _jsxFileName$6 = "/app/applet/src/components/CountdownTimer.tsx";
var CountdownTimer = () => {
	const [timeLeft, setTimeLeft] = (0, import_react.useState)({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0
	});
	(0, import_react.useEffect)(() => {
		const weddingDate = (/* @__PURE__ */ new Date("2027-01-24T18:30:00+04:00")).getTime();
		const calculateTimeLeft = () => {
			const now = (/* @__PURE__ */ new Date()).getTime();
			const difference = weddingDate - now;
			if (difference > 0) setTimeLeft({
				days: Math.floor(difference / 864e5),
				hours: Math.floor(difference % 864e5 / 36e5),
				minutes: Math.floor(difference % 36e5 / 6e4),
				seconds: Math.floor(difference % 6e4 / 1e3)
			});
			else setTimeLeft({
				days: 0,
				hours: 0,
				minutes: 0,
				seconds: 0
			});
		};
		calculateTimeLeft();
		const timer = setInterval(calculateTimeLeft, 1e3);
		return () => clearInterval(timer);
	}, []);
	const timeBlocks = [
		{
			label: "Days",
			value: timeLeft.days
		},
		{
			label: "Hours",
			value: timeLeft.hours
		},
		{
			label: "Minutes",
			value: timeLeft.minutes
		},
		{
			label: "Seconds",
			value: timeLeft.seconds
		}
	];
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, {
		className: "flex justify-center gap-2 min-[360px]:gap-2.5 sm:gap-3 mt-5 px-3 max-w-[340px] mx-auto w-full font-bold",
		initial: {
			opacity: 0,
			y: 25
		},
		animate: {
			opacity: 1,
			y: 0
		},
		transition: {
			duration: .8,
			delay: .2
		},
		children: timeBlocks.map((block, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, {
			className: "text-center flex flex-col items-center flex-1 max-w-[72px]",
			initial: {
				opacity: 0,
				scale: .85
			},
			animate: {
				opacity: 1,
				scale: 1
			},
			transition: {
				duration: .5,
				delay: .2 + index * .1
			},
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-[0_8px_25px_rgba(74,46,27,0.1)] px-4 py-5 min-[360px]:px-5 min-[360px]:py-6 sm:px-6 sm:py-7 border border-[#8C6D53]/35 w-full flex items-center justify-center",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.span, {
					className: "text-3xl min-[360px]:text-4xl sm:text-5xl text-[#3B2213] leading-none font-bold",
					style: {
						fontFamily: "'Cinzel', serif",
						fontWeight: 700
					},
					initial: {
						scale: 1.15,
						opacity: 0
					},
					animate: {
						scale: 1,
						opacity: 1
					},
					transition: { duration: .3 },
					suppressHydrationWarning: true,
					children: String(block.value).padStart(2, "0")
				}, block.value, false, {
					fileName: _jsxFileName$6,
					lineNumber: 68,
					columnNumber: 13
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName$6,
				lineNumber: 67,
				columnNumber: 11
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "text-[8px] min-[360px]:text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.25em] uppercase text-[#6B4E3D] font-serif font-bold mt-2",
				style: {
					fontFamily: "'Cormorant Garamond', serif",
					fontWeight: 700
				},
				children: block.label
			}, void 0, false, {
				fileName: _jsxFileName$6,
				lineNumber: 80,
				columnNumber: 11
			}, void 0)]
		}, block.label, true, {
			fileName: _jsxFileName$6,
			lineNumber: 60,
			columnNumber: 9
		}, void 0))
	}, void 0, false, {
		fileName: _jsxFileName$6,
		lineNumber: 53,
		columnNumber: 5
	}, void 0);
};
var _jsxFileName$5 = "/app/applet/src/components/GlitterReveal.tsx";
function getCubicBezierPoint(t, p0, p1, p2, p3) {
	const u = 1 - t;
	const tt = t * t;
	const uu = u * u;
	const uuu = uu * u;
	const ttt = tt * t;
	return [uuu * p0[0] + 3 * uu * t * p1[0] + 3 * u * tt * p2[0] + ttt * p3[0], uuu * p0[1] + 3 * uu * t * p1[1] + 3 * u * tt * p2[1] + ttt * p3[1]];
}
function getCubicBezierDerivative(t, p0, p1, p2, p3) {
	const u = 1 - t;
	return [3 * u * u * (p1[0] - p0[0]) + 6 * u * t * (p2[0] - p1[0]) + 3 * t * t * (p3[0] - p2[0]), 3 * u * u * (p1[1] - p0[1]) + 6 * u * t * (p2[1] - p1[1]) + 3 * t * t * (p3[1] - p2[1])];
}
function drawSparkle(ctx, x, y, size, rotation, alpha, color) {
	ctx.save();
	ctx.translate(x, y);
	ctx.rotate(rotation);
	ctx.globalAlpha = Math.max(0, Math.min(1, alpha));
	ctx.fillStyle = color;
	ctx.beginPath();
	const outer = size;
	const inner = size * .22;
	for (let i = 0; i < 4; i++) {
		const angle = i * Math.PI / 2;
		const nextAngle = angle + Math.PI / 4;
		if (i === 0) ctx.moveTo(Math.cos(angle) * outer, Math.sin(angle) * outer);
		else ctx.lineTo(Math.cos(angle) * outer, Math.sin(angle) * outer);
		ctx.lineTo(Math.cos(nextAngle) * inner, Math.sin(nextAngle) * inner);
	}
	ctx.closePath();
	ctx.fill();
	ctx.beginPath();
	ctx.arc(0, 0, inner * .9, 0, Math.PI * 2);
	ctx.fillStyle = "#FFFFFF";
	ctx.fill();
	ctx.restore();
}
var SHIMMER_COLORS = [
	"#FFFFFF",
	"#FFFFFF",
	"#FFFFFF",
	"#F8FAFC",
	"#F1F5F9",
	"#E2E8F0",
	"#FFFFFF",
	"#EDF2F7",
	"#F0F9FF"
];
var GlitterReveal = ({ children, className = "w-full flex flex-col items-center justify-center py-8 px-4", pathVariant = "s-curve", duration = 2.4, delay = .1, enabled = true, fadeDuration = 1.6, revealThreshold = .5 }) => {
	const containerRef = (0, import_react.useRef)(null);
	const canvasRef = (0, import_react.useRef)(null);
	const [isRevealed, setIsRevealed] = (0, import_react.useState)(false);
	const [hasStarted, setHasStarted] = (0, import_react.useState)(false);
	const animFrameRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (!enabled) return;
		const container = containerRef.current;
		if (!container) return;
		if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			setIsRevealed(true);
			return;
		}
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting && !hasStarted) {
					setHasStarted(true);
					observer.disconnect();
				}
			});
		}, {
			threshold: .15,
			rootMargin: "0px 0px -40px 0px"
		});
		observer.observe(container);
		return () => observer.disconnect();
	}, [hasStarted, enabled]);
	(0, import_react.useEffect)(() => {
		if (!hasStarted) return;
		const canvas = canvasRef.current;
		const container = containerRef.current;
		if (!canvas || !container) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		const CANVAS_PAD = 70;
		let width = container.clientWidth;
		let height = container.clientHeight;
		const dpr = Math.min(window.devicePixelRatio || 1, 2);
		const resize = () => {
			width = container.clientWidth;
			height = container.clientHeight;
			const totalW = width + 140;
			const totalH = height + 140;
			canvas.width = totalW * dpr;
			canvas.height = totalH * dpr;
			canvas.style.width = `${totalW}px`;
			canvas.style.height = `${totalH}px`;
			canvas.style.left = `-${CANVAS_PAD}px`;
			canvas.style.top = `-${CANVAS_PAD}px`;
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
		};
		resize();
		let p0;
		let p1;
		let p2;
		let p3;
		const startX = -12;
		const startY = height + 18;
		const endX = width + 12;
		const endY = -18;
		switch (pathVariant) {
			case "arc-right":
				p0 = [startX, startY];
				p1 = [.35 * width, .7 * height];
				p2 = [.78 * width, .38 * height];
				p3 = [endX, endY];
				break;
			case "arc-left":
				p0 = [startX, startY];
				p1 = [.18 * width, .58 * height];
				p2 = [.65 * width, .25 * height];
				p3 = [endX, endY];
				break;
			default:
				p0 = [startX, startY];
				p1 = [.18 * width, .58 * height];
				p2 = [.82 * width, .42 * height];
				p3 = [endX, endY];
		}
		const particles = [];
		let startTime = null;
		const flightDurationMs = duration * 1e3;
		const delayMs = delay * 1e3;
		let revealTriggered = false;
		const totalW = width + 140;
		const totalH = height + 140;
		const render = (now) => {
			if (!startTime) startTime = now;
			const elapsed = now - startTime;
			ctx.clearRect(0, 0, totalW, totalH);
			const flightElapsed = elapsed - delayMs;
			const t = Math.max(0, Math.min(1, flightElapsed / flightDurationMs));
			if (t >= revealThreshold && !revealTriggered) {
				revealTriggered = true;
				setIsRevealed(true);
			}
			if (flightElapsed > 0 && t <= 1) {
				const [bx, by] = getCubicBezierPoint(t, p0, p1, p2, p3);
				const [dx, dy] = getCubicBezierDerivative(t, p0, p1, p2, p3);
				const len = Math.hypot(dx, dy) || 1;
				const nx = -dy / len;
				const ny = dx / len;
				const naturalSwoop = Math.sin(t * Math.PI) * Math.sin(t * Math.PI * 3) * 52 + Math.sin(t * Math.PI) * Math.cos(t * Math.PI * 5) * 28;
				const currX = bx + nx * naturalSwoop;
				const currY = by + ny * naturalSwoop;
				const headX = currX + CANVAS_PAD;
				const headY = currY + CANVAS_PAD;
				let headAlpha = 1;
				if (t < .12) headAlpha = t / .12;
				else if (t > .88) headAlpha = Math.max(0, (1 - t) / .12);
				const spawnCount = Math.floor(Math.random() * 3) + 4;
				for (let i = 0; i < spawnCount; i++) {
					const offsetAngle = Math.random() * Math.PI * 2;
					const offsetDist = Math.pow(Math.random(), 1.5) * 16;
					const px = headX + Math.cos(offsetAngle) * offsetDist;
					const py = headY + Math.sin(offsetAngle) * offsetDist;
					const isStar = Math.random() < .2;
					const size = isStar ? 3.5 + Math.random() * 4.5 : .8 + Math.random() * 2.4;
					particles.push({
						x: px,
						y: py,
						vx: (Math.random() - .5) * .6,
						vy: (Math.random() - .3) * .8,
						size,
						color: SHIMMER_COLORS[Math.floor(Math.random() * SHIMMER_COLORS.length)],
						maxLife: 45 + Math.random() * 55,
						life: 0,
						isStar,
						twinklePhase: Math.random() * Math.PI * 2,
						twinkleSpeed: .12 + Math.random() * .18
					});
				}
				ctx.save();
				ctx.globalCompositeOperation = "lighter";
				const glowRadius = 26;
				const radialGrad = ctx.createRadialGradient(headX, headY, 0, headX, headY, glowRadius);
				radialGrad.addColorStop(0, `rgba(255, 255, 255, ${.98 * headAlpha})`);
				radialGrad.addColorStop(.25, `rgba(255, 255, 255, ${.8 * headAlpha})`);
				radialGrad.addColorStop(.55, `rgba(240, 245, 255, ${.3 * headAlpha})`);
				radialGrad.addColorStop(.85, `rgba(230, 240, 255, ${.1 * headAlpha})`);
				radialGrad.addColorStop(1, "rgba(255, 255, 255, 0)");
				ctx.fillStyle = radialGrad;
				ctx.beginPath();
				ctx.arc(headX, headY, glowRadius, 0, Math.PI * 2);
				ctx.fill();
				const headRotation = now / 350 % (Math.PI * 2);
				drawSparkle(ctx, headX, headY, 9.5, headRotation, headAlpha, "#FFFFFF");
				drawSparkle(ctx, headX, headY, 6, headRotation + Math.PI / 4, .9 * headAlpha, "#F1F5F9");
				ctx.restore();
			}
			ctx.save();
			ctx.globalCompositeOperation = "lighter";
			for (let i = particles.length - 1; i >= 0; i--) {
				const p = particles[i];
				p.life++;
				p.x += p.vx;
				p.y += p.vy;
				p.twinklePhase += p.twinkleSpeed;
				const progress = p.life / p.maxLife;
				if (progress >= 1) {
					particles.splice(i, 1);
					continue;
				}
				let alpha = Math.sin(progress * Math.PI);
				const twinkle = .65 + .35 * Math.sin(p.twinklePhase);
				alpha *= twinkle;
				if (p.isStar) drawSparkle(ctx, p.x, p.y, p.size, p.twinklePhase * .4, alpha, p.color);
				else {
					ctx.beginPath();
					ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
					ctx.fillStyle = p.color;
					ctx.globalAlpha = Math.max(0, Math.min(1, alpha));
					ctx.fill();
				}
			}
			ctx.restore();
			if (t < 1 || particles.length > 0) animFrameRef.current = requestAnimationFrame(render);
			else ctx.clearRect(0, 0, totalW, totalH);
		};
		animFrameRef.current = requestAnimationFrame(render);
		return () => {
			if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
		};
	}, [
		hasStarted,
		duration,
		delay,
		pathVariant,
		revealThreshold
	]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		ref: containerRef,
		className: `relative w-full ${className}`,
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("canvas", {
			ref: canvasRef,
			className: "absolute inset-0 pointer-events-none z-30 overflow-visible",
			"aria-hidden": "true"
		}, void 0, false, {
			fileName: _jsxFileName$5,
			lineNumber: 398,
			columnNumber: 7
		}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			style: { transitionDuration: `${fadeDuration}s` },
			className: `relative z-10 w-full transition-all ease-[cubic-bezier(0.16,1,0.3,1)] ${isRevealed ? "opacity-100 blur-0 scale-100 translate-y-0" : "opacity-0 blur-[8px] scale-[0.96] translate-y-3 pointer-events-none"}`,
			children
		}, void 0, false, {
			fileName: _jsxFileName$5,
			lineNumber: 405,
			columnNumber: 7
		}, void 0)]
	}, void 0, true, {
		fileName: _jsxFileName$5,
		lineNumber: 396,
		columnNumber: 5
	}, void 0);
};
var _jsxFileName$4 = "/app/applet/src/components/ScrollInvitation.tsx";
var ScrollInvitation = ({ isEnvelopeOpened = true }) => {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "relative font-bold",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollSection, {
				isFirst: true,
				className: "px-1.5 sm:px-3",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GlitterReveal, {
					pathVariant: "diagonal",
					duration: 3,
					enabled: isEnvelopeOpened,
					delay: 2.4,
					fadeDuration: 1.8,
					revealThreshold: .5,
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex flex-col items-center justify-center w-full px-0 mx-auto",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
							src: wholeBismillahSection_default,
							alt: "Bismillah and Invitation",
							className: "w-full max-w-[440px] scale-110 sm:scale-115 h-auto drop-shadow-sm origin-center"
						}, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 27,
							columnNumber: 13
						}, void 0)
					}, void 0, false, {
						fileName: _jsxFileName$4,
						lineNumber: 26,
						columnNumber: 11
					}, void 0)
				}, void 0, false, {
					fileName: _jsxFileName$4,
					lineNumber: 18,
					columnNumber: 9
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName$4,
				lineNumber: 17,
				columnNumber: 7
			}, void 0),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollSection, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "relative text-center px-4 w-full max-w-md mx-auto my-auto flex flex-col items-center justify-center font-bold",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex flex-col items-center mb-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
								className: "text-2xl min-[360px]:text-3xl sm:text-4xl text-[#7A3245] font-bold leading-tight mb-2",
								style: {
									fontFamily: "'Reem Kufi', sans-serif",
									fontWeight: 700
								},
								dir: "rtl",
								lang: "ar",
								children: "خديجة عبد الشكور"
							}, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 42,
								columnNumber: 13
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
								className: "text-2xl min-[360px]:text-3xl sm:text-4xl text-[#3B2213] font-extrabold tracking-normal leading-tight whitespace-nowrap py-1",
								style: {
									fontFamily: "'Playfair Display', serif",
									fontWeight: 800
								},
								children: "Khadeeja Abdul Shukkoor"
							}, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 52,
								columnNumber: 13
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "text-sm min-[360px]:text-base text-[#6B4E3D] italic tracking-wider mt-2 flex flex-col items-center leading-relaxed",
								style: { fontFamily: "'Cormorant Garamond', serif" },
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
										"Daughter of",
										" ",
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
											className: "font-extrabold text-[#3B2213] not-italic text-base",
											children: "AJ Abdul Shukkoor"
										}, void 0, false, {
											fileName: _jsxFileName$4,
											lineNumber: 66,
											columnNumber: 17
										}, void 0)
									] }, void 0, true, {
										fileName: _jsxFileName$4,
										lineNumber: 64,
										columnNumber: 15
									}, void 0),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "text-sm min-[360px]:text-base text-[#8C6D53] my-1 font-bold",
										children: "&"
									}, void 0, false, {
										fileName: _jsxFileName$4,
										lineNumber: 70,
										columnNumber: 15
									}, void 0),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
										className: "font-extrabold text-[#3B2213] not-italic text-base",
										children: "Hashmiya Abdul Shukkoor"
									}, void 0, false, {
										fileName: _jsxFileName$4,
										lineNumber: 73,
										columnNumber: 15
									}, void 0)
								]
							}, void 0, true, {
								fileName: _jsxFileName$4,
								lineNumber: 60,
								columnNumber: 13
							}, void 0)
						]
					}, void 0, true, {
						fileName: _jsxFileName$4,
						lineNumber: 40,
						columnNumber: 11
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center justify-center gap-4 my-4 w-full max-w-[240px]",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 h-px bg-[#8C6D53]/40" }, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 81,
								columnNumber: 13
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-4xl min-[360px]:text-5xl text-[#8C6D53] font-bold italic",
								style: {
									fontFamily: "'Cormorant Garamond', serif",
									fontWeight: 700
								},
								children: "&"
							}, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 82,
								columnNumber: 13
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 h-px bg-[#8C6D53]/40" }, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 88,
								columnNumber: 13
							}, void 0)
						]
					}, void 0, true, {
						fileName: _jsxFileName$4,
						lineNumber: 80,
						columnNumber: 11
					}, void 0),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex flex-col items-center mt-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
								className: "text-2xl min-[360px]:text-3xl sm:text-4xl text-[#7A3245] font-bold leading-tight mb-2",
								style: {
									fontFamily: "'Reem Kufi', sans-serif",
									fontWeight: 700
								},
								dir: "rtl",
								lang: "ar",
								children: "محمد صَوّاد"
							}, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 94,
								columnNumber: 13
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
								className: "text-2xl min-[360px]:text-3xl sm:text-4xl text-[#3B2213] font-extrabold tracking-normal leading-tight whitespace-nowrap py-1",
								style: {
									fontFamily: "'Playfair Display', serif",
									fontWeight: 800
								},
								children: "Mohamed Savad"
							}, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 104,
								columnNumber: 13
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "text-sm min-[360px]:text-base text-[#6B4E3D] italic tracking-wider mt-2 flex flex-col items-center leading-relaxed",
								style: { fontFamily: "'Cormorant Garamond', serif" },
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
										"Son of",
										" ",
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
											className: "font-extrabold text-[#3B2213] not-italic text-base",
											children: "Aboobacker Madathil Palliyalil"
										}, void 0, false, {
											fileName: _jsxFileName$4,
											lineNumber: 118,
											columnNumber: 17
										}, void 0)
									] }, void 0, true, {
										fileName: _jsxFileName$4,
										lineNumber: 116,
										columnNumber: 15
									}, void 0),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "text-sm min-[360px]:text-base text-[#8C6D53] my-1 font-bold",
										children: "&"
									}, void 0, false, {
										fileName: _jsxFileName$4,
										lineNumber: 122,
										columnNumber: 15
									}, void 0),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
										className: "font-extrabold text-[#3B2213] not-italic text-base",
										children: "Sajna Aboobacker"
									}, void 0, false, {
										fileName: _jsxFileName$4,
										lineNumber: 125,
										columnNumber: 15
									}, void 0)
								]
							}, void 0, true, {
								fileName: _jsxFileName$4,
								lineNumber: 112,
								columnNumber: 13
							}, void 0)
						]
					}, void 0, true, {
						fileName: _jsxFileName$4,
						lineNumber: 92,
						columnNumber: 11
					}, void 0)
				]
			}, void 0, true, {
				fileName: _jsxFileName$4,
				lineNumber: 38,
				columnNumber: 9
			}, void 0) }, void 0, false, {
				fileName: _jsxFileName$4,
				lineNumber: 37,
				columnNumber: 7
			}, void 0),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollSection, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "text-center max-w-lg w-full px-4 mx-auto mb-8 font-bold",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
					className: "text-[#5C3A21] font-serif text-base min-[360px]:text-lg md:text-xl font-bold tracking-[0.3em] mb-3 uppercase",
					style: {
						fontFamily: "'Cormorant Garamond', serif",
						fontWeight: 700
					},
					children: "Save The Date"
				}, void 0, false, {
					fileName: _jsxFileName$4,
					lineNumber: 136,
					columnNumber: 11
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NikkahCard, {}, void 0, false, {
					fileName: _jsxFileName$4,
					lineNumber: 143,
					columnNumber: 11
				}, void 0)]
			}, void 0, true, {
				fileName: _jsxFileName$4,
				lineNumber: 135,
				columnNumber: 9
			}, void 0) }, void 0, false, {
				fileName: _jsxFileName$4,
				lineNumber: 134,
				columnNumber: 7
			}, void 0),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollSection, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "text-center max-w-lg w-full px-3 mx-auto font-bold",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "text-[#5C3A21] font-serif text-base min-[360px]:text-lg md:text-xl font-bold tracking-[0.3em] mb-3 uppercase",
					style: {
						fontFamily: "'Cormorant Garamond', serif",
						fontWeight: 700
					},
					children: "Venue"
				}, void 0, false, {
					fileName: _jsxFileName$4,
					lineNumber: 150,
					columnNumber: 11
				}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mb-8",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "p-3.5 min-[360px]:p-4 rounded-2xl bg-white/90 border border-[#8C6D53]/30 backdrop-blur-sm shadow-[0_8px_30px_rgba(74,46,27,0.08)] max-w-[350px] mx-auto",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
								className: "text-[13px] min-[360px]:text-sm sm:text-[15px] font-serif text-[#3B2213] font-bold tracking-[0.1em] uppercase mb-1 leading-snug",
								style: {
									fontFamily: "'Cormorant Garamond', serif",
									fontWeight: 700
								},
								children: "LE MÉRIDIEN DUBAI HOTEL & CONFERENCE CENTRE"
							}, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 159,
								columnNumber: 15
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-xs min-[360px]:text-[13px] font-serif italic text-[#6B4E3D] font-bold mb-1",
								style: {
									fontFamily: "'Cormorant Garamond', serif",
									fontWeight: 700
								},
								children: "Great Ballroom"
							}, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 165,
								columnNumber: 15
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-[10.5px] min-[360px]:text-[11px] text-[#6B4E3D] font-body font-bold flex items-center justify-center gap-1 mb-2.5",
								style: { fontWeight: 700 },
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MapPin, { className: "w-3 h-3 text-[#8C6D53] shrink-0" }, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 175,
									columnNumber: 17
								}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Airport Road, Garhoud, Dubai, UAE" }, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 176,
									columnNumber: 17
								}, void 0)]
							}, void 0, true, {
								fileName: _jsxFileName$4,
								lineNumber: 171,
								columnNumber: 15
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "relative overflow-hidden rounded-lg border border-[#8C6D53]/25 shadow-xs bg-white mb-2.5",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "h-[120px] min-[360px]:h-[130px] w-full",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("iframe", {
										src: "https://maps.google.com/maps?q=Le%20M%C3%A9ridien%20Dubai%20Hotel%20%26%20Conference%20Centre&t=&z=15&ie=UTF8&iwloc=&output=embed",
										width: "100%",
										height: "100%",
										style: { border: 0 },
										allowFullScreen: true,
										loading: "lazy",
										referrerPolicy: "no-referrer-when-downgrade",
										title: "Le Méridien Dubai Hotel & Conference Centre Location",
										suppressHydrationWarning: true
									}, void 0, false, {
										fileName: _jsxFileName$4,
										lineNumber: 182,
										columnNumber: 19
									}, void 0)
								}, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 181,
									columnNumber: 17
								}, void 0)
							}, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 180,
								columnNumber: 15
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center justify-center",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
									href: "https://maps.google.com/?q=Le+M%C3%A9ridien+Dubai+Hotel+%26+Conference+Centre",
									target: "_blank",
									rel: "noopener noreferrer",
									className: "inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full bg-[#4A2E1B] text-[#FAF6F0] font-serif text-[11px] min-[360px]:text-xs font-bold uppercase tracking-wider shadow-sm hover:bg-[#3B2213] transition-colors",
									style: { fontWeight: 700 },
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Navigation, { className: "w-3 h-3" }, void 0, false, {
										fileName: _jsxFileName$4,
										lineNumber: 205,
										columnNumber: 19
									}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Open in Google Maps" }, void 0, false, {
										fileName: _jsxFileName$4,
										lineNumber: 206,
										columnNumber: 19
									}, void 0)]
								}, void 0, true, {
									fileName: _jsxFileName$4,
									lineNumber: 198,
									columnNumber: 17
								}, void 0)
							}, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 197,
								columnNumber: 15
							}, void 0)
						]
					}, void 0, true, {
						fileName: _jsxFileName$4,
						lineNumber: 158,
						columnNumber: 13
					}, void 0)
				}, void 0, false, {
					fileName: _jsxFileName$4,
					lineNumber: 157,
					columnNumber: 11
				}, void 0)]
			}, void 0, true, {
				fileName: _jsxFileName$4,
				lineNumber: 149,
				columnNumber: 9
			}, void 0) }, void 0, false, {
				fileName: _jsxFileName$4,
				lineNumber: 148,
				columnNumber: 7
			}, void 0),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollSection, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "text-center max-w-lg w-full px-4 mx-auto font-bold",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mb-6 flex flex-col items-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
							className: "text-[#5C3A21] font-serif text-[10.5px] min-[360px]:text-xs min-[400px]:text-sm sm:text-base font-bold tracking-[0.12em] min-[360px]:tracking-[0.16em] sm:tracking-[0.22em] mb-3 uppercase whitespace-nowrap",
							style: {
								fontFamily: "'Cormorant Garamond', serif",
								fontWeight: 700
							},
							children: "Counting Down to Our Big Day"
						}, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 218,
							columnNumber: 13
						}, void 0),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CountdownTimer, {}, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 225,
							columnNumber: 13
						}, void 0),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
							src: inshaAllah_brownn_default,
							alt: "InshaAllah Calligraphy",
							className: "w-auto h-8 min-[360px]:h-9 sm:h-10 mx-auto mt-7 min-[360px]:mt-8 sm:mt-9 drop-shadow-xs opacity-85"
						}, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 227,
							columnNumber: 13
						}, void 0)
					]
				}, void 0, true, {
					fileName: _jsxFileName$4,
					lineNumber: 217,
					columnNumber: 11
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName$4,
				lineNumber: 216,
				columnNumber: 9
			}, void 0) }, void 0, false, {
				fileName: _jsxFileName$4,
				lineNumber: 215,
				columnNumber: 7
			}, void 0),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollSection, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "text-center max-w-lg w-full px-3 mx-auto font-bold",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex flex-col items-center justify-center gap-3.5 my-auto min-h-[50svh]",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "w-full max-w-[340px] min-[360px]:max-w-[360px] mx-auto rounded-2xl bg-[#FFF9FA]/40 backdrop-blur-lg border border-[#E5B8C3]/40 shadow-[0_6px_20px_rgba(122,50,69,0.08)] p-5 min-[360px]:p-6 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center justify-center gap-2 mb-3 opacity-70",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "h-px w-8 bg-[#C88595]/30" }, void 0, false, {
										fileName: _jsxFileName$4,
										lineNumber: 244,
										columnNumber: 17
									}, void 0),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
										className: "w-5 h-4 text-[#A86273] shrink-0",
										viewBox: "0 0 24 20",
										fill: "currentColor",
										children: [
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M12 0C12 0 9.5 4 9.5 8C9.5 10 10.5 11 12 12C13.5 11 14.5 10 14.5 8C14.5 4 12 0 12 0Z" }, void 0, false, {
												fileName: _jsxFileName$4,
												lineNumber: 250,
												columnNumber: 19
											}, void 0),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M4 11C4 11 7 8 10 10C9.5 11.5 8.5 12.5 6.5 12.5C5 12.5 4 11 4 11Z" }, void 0, false, {
												fileName: _jsxFileName$4,
												lineNumber: 251,
												columnNumber: 19
											}, void 0),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M20 11C20 11 17 8 14 10C14.5 11.5 15.5 12.5 17.5 12.5C19 12.5 20 11 20 11Z" }, void 0, false, {
												fileName: _jsxFileName$4,
												lineNumber: 252,
												columnNumber: 19
											}, void 0),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
												cx: "12",
												cy: "14",
												r: "1.5"
											}, void 0, false, {
												fileName: _jsxFileName$4,
												lineNumber: 253,
												columnNumber: 19
											}, void 0)
										]
									}, void 0, true, {
										fileName: _jsxFileName$4,
										lineNumber: 245,
										columnNumber: 17
									}, void 0),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "h-px w-8 bg-[#C88595]/30" }, void 0, false, {
										fileName: _jsxFileName$4,
										lineNumber: 255,
										columnNumber: 17
									}, void 0)
								]
							}, void 0, true, {
								fileName: _jsxFileName$4,
								lineNumber: 243,
								columnNumber: 15
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-base min-[360px]:text-lg text-[#7A3245] leading-relaxed font-bold mb-3 px-2",
								style: {
									fontFamily: "'Amiri', serif",
									fontWeight: 700
								},
								dir: "rtl",
								lang: "ar",
								children: "لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً"
							}, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 259,
								columnNumber: 15
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-xs min-[360px]:text-[13px] text-[#5C3A21] italic font-serif font-bold leading-snug px-2",
								style: {
									fontFamily: "'Cormorant Garamond', serif",
									fontWeight: 700
								},
								children: "“That you may find tranquility in them, and He placed between you affection and mercy.”"
							}, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 269,
								columnNumber: 15
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-[10px] min-[360px]:text-[11px] tracking-[0.2em] uppercase text-[#A86273] mt-3 font-serif font-bold",
								style: {
									fontFamily: "'Cormorant Garamond', serif",
									fontWeight: 700
								},
								children: "— Qur’an 30:21 —"
							}, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 278,
								columnNumber: 15
							}, void 0)
						]
					}, void 0, true, {
						fileName: _jsxFileName$4,
						lineNumber: 241,
						columnNumber: 13
					}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "w-full max-w-[340px] min-[360px]:max-w-[360px] mx-auto rounded-2xl bg-[#FFF9FA]/40 backdrop-blur-lg border border-[#E5B8C3]/40 shadow-[0_6px_20px_rgba(122,50,69,0.06)] p-5 min-[360px]:p-6 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "inline-flex items-center justify-center gap-2 mb-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "text-[#A86273] text-[10px]",
										children: "✤"
									}, void 0, false, {
										fileName: _jsxFileName$4,
										lineNumber: 289,
										columnNumber: 17
									}, void 0),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
										className: "text-xs min-[360px]:text-[13px] uppercase tracking-[0.2em] text-[#7A3245] font-bold",
										style: {
											fontFamily: "'Cormorant Garamond', serif",
											fontWeight: 700
										},
										children: "With Love & Best Compliments"
									}, void 0, false, {
										fileName: _jsxFileName$4,
										lineNumber: 290,
										columnNumber: 17
									}, void 0),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: "text-[#A86273] text-[10px]",
										children: "✤"
									}, void 0, false, {
										fileName: _jsxFileName$4,
										lineNumber: 296,
										columnNumber: 17
									}, void 0)
								]
							}, void 0, true, {
								fileName: _jsxFileName$4,
								lineNumber: 288,
								columnNumber: 15
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-px w-20 bg-[#C88595]/30 mx-auto mb-3" }, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 298,
								columnNumber: 15
							}, void 0),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-[13px] min-[360px]:text-[14px] sm:text-[15px] text-[#4A2E1B] font-serif leading-relaxed font-bold",
								style: {
									fontFamily: "'Cormorant Garamond', serif",
									fontWeight: 700
								},
								children: "Huda Fathima , Hamdan , Shahbaz , Hana , Haadi Mohammed"
							}, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 299,
								columnNumber: 15
							}, void 0)
						]
					}, void 0, true, {
						fileName: _jsxFileName$4,
						lineNumber: 287,
						columnNumber: 13
					}, void 0)]
				}, void 0, true, {
					fileName: _jsxFileName$4,
					lineNumber: 239,
					columnNumber: 11
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName$4,
				lineNumber: 238,
				columnNumber: 9
			}, void 0) }, void 0, false, {
				fileName: _jsxFileName$4,
				lineNumber: 237,
				columnNumber: 7
			}, void 0),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-[12vh] w-full pointer-events-none" }, void 0, false, {
				fileName: _jsxFileName$4,
				lineNumber: 311,
				columnNumber: 7
			}, void 0)
		]
	}, void 0, true, {
		fileName: _jsxFileName$4,
		lineNumber: 15,
		columnNumber: 5
	}, void 0);
};
var Burgundy_Seal_Envelope_White_default = "/assets/Burgundy_Seal_Envelope_White-DXczCnBu.mp4";
var _jsxFileName$3 = "/app/applet/src/components/Envelope.tsx";
function Envelope({ onOpen, isOpen }) {
	const videoRef = (0, import_react.useRef)(null);
	const [isPlaying, setIsPlaying] = (0, import_react.useState)(false);
	const [showFlash, setShowFlash] = (0, import_react.useState)(false);
	const [isDone, setIsDone] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (isOpen && !isPlaying && !showFlash && !isDone) setIsDone(true);
	}, [
		isOpen,
		isPlaying,
		showFlash,
		isDone
	]);
	const startPlayback = () => {
		if (isPlaying || showFlash || isDone) return;
		const video = videoRef.current;
		if (!video) {
			triggerWebsiteTransition();
			return;
		}
		video.muted = true;
		setIsPlaying(true);
		const playPromise = video.play();
		if (playPromise !== void 0) playPromise.catch((err) => {
			console.warn("Video play error:", err);
			triggerWebsiteTransition();
		});
	};
	const triggerWebsiteTransition = () => {
		if (showFlash || isDone) return;
		setShowFlash(true);
		onOpen();
		setTimeout(() => {
			setIsDone(true);
		}, 1800);
	};
	if (isDone) return null;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: `fixed inset-y-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] h-full z-[100] flex items-center justify-center overflow-hidden bg-[#1A1412] select-none transition-opacity duration-1000 ${showFlash ? "opacity-0 pointer-events-none" : "opacity-100"}`,
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "relative w-full h-full flex items-center justify-center bg-black cursor-pointer",
			onClick: startPlayback,
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("video", {
				ref: videoRef,
				src: `${Burgundy_Seal_Envelope_White_default}#t=0.001`,
				muted: true,
				playsInline: true,
				preload: "auto",
				suppressHydrationWarning: true,
				onEnded: triggerWebsiteTransition,
				onTimeUpdate: () => {
					if (videoRef.current && isPlaying && !showFlash) {
						const { currentTime, duration } = videoRef.current;
						if (duration > 0 && currentTime >= duration - .2) triggerWebsiteTransition();
					}
				},
				onLoadedMetadata: () => {
					if (videoRef.current && !isPlaying) videoRef.current.currentTime = .001;
				},
				className: "w-full h-full object-cover select-none"
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 67,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$3,
			lineNumber: 63,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AnimatePresence, { children: showFlash && /* @__PURE__ */ (void 0)(motion.div, {
			initial: { opacity: 0 },
			animate: { opacity: [
				0,
				1,
				0
			] },
			transition: {
				duration: 1.5,
				times: [
					0,
					.3,
					1
				],
				ease: "easeInOut"
			},
			className: "fixed inset-0 z-[110] bg-[#FCFAF2] pointer-events-none"
		}, void 0, false, {
			fileName: _jsxFileName$3,
			lineNumber: 95,
			columnNumber: 11
		}, this) }, void 0, false, {
			fileName: _jsxFileName$3,
			lineNumber: 93,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$3,
		lineNumber: 57,
		columnNumber: 5
	}, this);
}
var bgmusic_default = "/assets/bgmusic-M00RryFx.mp3";
var _jsxFileName$2 = "/app/applet/src/components/AudioPlayer.tsx";
function AudioPlayer({ autoPlayTrigger: _autoPlayTrigger = true } = {}) {
	const [isPlaying, setIsPlaying] = (0, import_react.useState)(false);
	const audioRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const audio = new Audio(bgmusic_default);
		audio.loop = true;
		audio.volume = .4;
		audioRef.current = audio;
		const startAudio = () => {
			if (audio.paused) audio.play().then(() => {
				setIsPlaying(true);
			}).catch((err) => {
				console.log("Autoplay waiting for initial interaction:", err);
			});
		};
		startAudio();
		const handleFirstGesture = () => {
			startAudio();
		};
		window.addEventListener("pointerdown", handleFirstGesture, { once: true });
		window.addEventListener("click", handleFirstGesture, { once: true });
		window.addEventListener("touchstart", handleFirstGesture, { once: true });
		return () => {
			window.removeEventListener("pointerdown", handleFirstGesture);
			window.removeEventListener("click", handleFirstGesture);
			window.removeEventListener("touchstart", handleFirstGesture);
			audio.pause();
			audioRef.current = null;
		};
	}, []);
	const togglePlay = (e) => {
		e.stopPropagation();
		if (!audioRef.current) return;
		if (isPlaying) {
			audioRef.current.pause();
			setIsPlaying(false);
		} else audioRef.current.play().then(() => {
			setIsPlaying(true);
		}).catch((err) => {
			console.log("Playback failed:", err);
		});
	};
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "fixed top-4 right-4 z-[120] pointer-events-auto",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
			onClick: togglePlay,
			className: `w-10 h-10 rounded-full flex items-center justify-center bg-[#FAF6F0]/85 backdrop-blur-md border border-[#8C6D53]/30 shadow-md text-[#5C3A21] hover:bg-[#FAF6F0] transition-all duration-300 ${isPlaying ? "ring-2 ring-[#C88595]/50 animate-pulse" : ""}`,
			title: isPlaying ? "Mute Background Music" : "Play Background Music",
			"aria-label": isPlaying ? "Mute Background Music" : "Play Background Music",
			children: isPlaying ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Volume2, { className: "w-4 h-4 text-[#7A3245]" }, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 83,
				columnNumber: 11
			}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(VolumeX, { className: "w-4 h-4 text-[#8C6D53]/60" }, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 85,
				columnNumber: 11
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 74,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 73,
		columnNumber: 5
	}, this);
}
var _jsxFileName$1 = "/app/applet/src/components/ScrollIndicator.tsx";
function ScrollIndicator() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, {
		initial: {
			opacity: 0,
			y: 10
		},
		animate: {
			opacity: 1,
			y: 0
		},
		transition: {
			delay: 1,
			duration: .8
		},
		className: "fixed bottom-6 left-1/2 -translate-x-1/2 z-[90] pointer-events-none",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, {
			animate: { y: [
				0,
				5,
				0
			] },
			transition: {
				duration: 2,
				repeat: Infinity,
				ease: "easeInOut"
			},
			className: "flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#A03354]/90 backdrop-blur-sm border border-[#FAF6F0]/30 shadow-lg",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronDown, { className: "w-3 h-3 text-[#FAF6F0]" }, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 17,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					className: "text-[10px] uppercase tracking-[0.2em] font-bold text-[#FAF6F0]",
					style: {
						fontFamily: "'Cormorant Garamond', serif",
						fontWeight: 700
					},
					children: "Scroll Down"
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 18,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronDown, { className: "w-3 h-3 text-[#FAF6F0]" }, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 24,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 12,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 6,
		columnNumber: 5
	}, this);
}
var flowers_branch_tall_default = "/assets/flowers-branch-tall-BDUrHJDR.png";
var flowers_corner_left_default = "/assets/flowers-corner-left-B__VD0Py.png";
var flowers_corner_right_default = "/assets/flowers-corner-right-BPCniXN7.png";
var flowers_meadow_default = "/assets/flowers-meadow-CBoSxZxO.png";
var _jsxFileName = "/app/applet/src/routes/index.tsx?tsr-split=component";
function Index() {
	const [isOpened, setIsOpened] = (0, import_react.useState)(false);
	const [showScrollIndicator, setShowScrollIndicator] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (isOpened) {
			const timer = setTimeout(() => {
				setShowScrollIndicator(true);
			}, 6e3);
			return () => clearTimeout(timer);
		}
	}, [isOpened]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "min-h-screen w-full bg-[#1A1412] flex justify-center items-start overflow-x-hidden",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
			className: "relative min-h-screen w-full max-w-[430px] mx-auto bg-[#FCFAF2] sm:shadow-[0_0_70px_rgba(0,0,0,0.45)] sm:border-x sm:border-[#8C6D53]/25 overflow-x-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Envelope, {
					isOpen: isOpened,
					onOpen: () => setIsOpened(true)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 26,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AudioPlayer, { autoPlayTrigger: true }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 29,
					columnNumber: 9
				}, this),
				showScrollIndicator && /* @__PURE__ */ (void 0)(ScrollIndicator, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 31,
					columnNumber: 33
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "fixed inset-y-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] h-full z-0 pointer-events-none overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
						className: "w-full h-full object-cover",
						src: bg08_default,
						alt: "Background"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 35,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 34,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: `relative z-10 w-full max-w-[430px] mx-auto ${isOpened ? "opacity-100" : "opacity-0 pointer-events-none"} transition-opacity duration-1500`,
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollInvitation, { isEnvelopeOpened: isOpened }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 40,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 39,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: `fixed inset-y-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] h-full pointer-events-none z-20 overflow-hidden ${isOpened ? "opacity-100" : "opacity-0"} transition-opacity duration-1500`,
					role: "img",
					"aria-label": "Pink peonies, roses and wildflowers",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FallingPetals, {}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 45,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "cluster cluster-corner-tl absolute pointer-events-none w-[58%] -top-[4%] -left-[6%] opacity-1",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
								src: flowers_corner_left_default,
								width: 1024,
								height: 1024,
								alt: ""
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 48,
								columnNumber: 13
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 47,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "cluster cluster-corner-tr absolute pointer-events-none w-[66%] -top-[6%] -right-[9%] opacity-1",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
								src: flowers_corner_right_default,
								width: 1024,
								height: 1024,
								alt: ""
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 51,
								columnNumber: 13
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 50,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "cluster cluster-stem-left absolute pointer-events-none w-[36%] -bottom-[18%] -left-[7%] opacity-1",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
								src: flowers_branch_tall_default,
								width: 768,
								height: 1536,
								alt: ""
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 54,
								columnNumber: 13
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 53,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "cluster cluster-stem-right absolute pointer-events-none w-[44%] -bottom-[16%] -right-[6%] opacity-1",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
								src: flowers_branch_tall_default,
								width: 768,
								height: 1536,
								alt: ""
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 57,
								columnNumber: 13
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 56,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "cluster cluster-stem-mid absolute pointer-events-none w-[26%] -bottom-[20%] left-[24%] opacity-1",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
								src: flowers_branch_tall_default,
								width: 768,
								height: 1536,
								alt: ""
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 60,
								columnNumber: 13
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 59,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "cluster cluster-meadow-back absolute pointer-events-none w-[132%] -left-[16%] -bottom-[8%] opacity-1",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
								src: flowers_meadow_default,
								width: 1536,
								height: 768,
								alt: ""
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 63,
								columnNumber: 13
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 62,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "cluster cluster-meadow-front absolute pointer-events-none w-[148%] -left-[24%] -bottom-[15%] opacity-1",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
								src: flowers_meadow_default,
								width: 1536,
								height: 768,
								alt: ""
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 66,
								columnNumber: 13
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 65,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 44,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 24,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 23,
		columnNumber: 10
	}, this);
}
//#endregion
export { Index as component };
