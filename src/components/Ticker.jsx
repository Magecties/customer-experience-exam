import "../css/ticker.css";
import WantedLogo from "../ticker-img/wangted-logo.svg";
import LostBoysLogo from "../ticker-img/lostboys-logo.svg";
import BarreenLogo from "../ticker-img/barren-logo.svg";
import TwoJeysLogo from "../ticker-img/twojeys-logo.svg";
import ZunoLogo from "../ticker-img/zuno-logo.svg";
import ScuffersLogo from "../ticker-img/scuffers-logo.svg";
import AttodeLogo from "../ticker-img/attode-logo.svg";

const items = [
  WantedLogo,
  LostBoysLogo,
  BarreenLogo,
  TwoJeysLogo,
  ZunoLogo,
  ScuffersLogo,
  AttodeLogo,
];

const names = [
  "Most Wanted",
  "Lost Boys Archives",
  "Bareen",
  "TwoJeys",
  "Zuno Archives",
  "Scuffers",
  "Attode",
];

export default function Ticker() {
  const allItems = [...items, ...items];

  return (
    <div className="ticker-wrap">
      <div className="ticker">
        {allItems.map((logo, index) => (
          <span className="ticker-item" key={index}>
            <span className="ticker-dot">✦</span>
            <img
              src={logo}
              alt={names[index % names.length]}
              className="ticker-logo"
            />
          </span>
        ))}
      </div>
    </div>
  );
}
