"use client";

import { useState } from "react";
import {
    Copy,
    Check,
} from "lucide-react";
import SectionHeader from "./shared/SectionHeader";
import TechIcon from "./shared/TechIcon";
import StaticCard from "./shared/StaticCard";
import StackColumn from "./shared/StackColumn";
import Marquee from "./shared/Marquee";

// ========== CONSTANTS ==========
const EMAIL = "angenono.pro@gmail.com";

// ========== TECH ICONS (SVG inline pour performance) ==========
const TypeScriptIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
    </svg>
);

const ReactIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
    </svg>
);

const NextIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.572 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z" />
    </svg>
);

const TailwindIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
    </svg>
);

const NodeIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M11.998 24c-.321 0-.641-.084-.922-.247L8.14 22.016c-.438-.245-.224-.332-.08-.383.585-.203.703-.25 1.328-.604.065-.037.151-.023.218.017l2.256 1.339c.082.045.198.045.275 0l8.795-5.076c.082-.047.134-.141.134-.238V6.921c0-.099-.053-.193-.137-.242l-8.791-5.072c-.081-.047-.189-.047-.271 0L3.075 6.68c-.085.049-.139.143-.139.242v10.15c0 .097.054.189.139.235l2.409 1.392c1.307.654 2.108-.116 2.108-.89V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.112.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.551L2.28 18.675c-.57-.329-.922-.943-.922-1.604V6.921c0-.659.353-1.275.922-1.603l8.795-5.082c.557-.315 1.296-.315 1.848 0l8.794 5.082c.57.329.924.944.924 1.603v10.15c0 .659-.354 1.273-.924 1.604l-8.794 5.078c-.28.163-.6.247-.925.247z" />
    </svg>
);

const ExpressIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M24 18.588a1.529 1.529 0 0 1-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 0 1-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 0 1 1.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 0 1 1.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 0 0 0 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 0 0 2.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 0 1-2.589 3.957 6.272 6.272 0 0 1-7.306-.933 6.575 6.575 0 0 1-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 0 1 0 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z" />
    </svg>
);

const ApiIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M13.26 10.5h2v1h-2v-1zm0 2h2v1h-2v-1zm-5-2h2v1h-2v-1zm0 2h2v1h-2v-1zm-5-2h2v1h-2v-1zm0 2h2v1h-2v-1zM22 4v16H2V4h20zm-1 1H3v14h18V5zM6 7h1v2H6V7zm3 0h1v2H9V7zm3 0h1v2h-1V7zm3 0h1v2h-1V7zm3 0h1v2h-1V7zM6 15h1v2H6v-2zm3 0h1v2H9v-2zm3 0h1v2h-1v-2zm3 0h1v2h-1v-2zm3 0h1v2h-1v-2z" />
    </svg>
);

const JwtIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M10.2 0v6.456L12 9.778l1.8-3.322V0h-3.6zM13.8 0v5.689l3.5 2.015V.278A12.07 12.07 0 0 0 13.8 0zm-3.6 0a12.07 12.07 0 0 0-3.5.278V7.7l3.5-2.015V0zM6 .84A12.053 12.053 0 0 0 2.266 4.2l3.067 1.767L6 5.689V.84zM2.266 4.2A12.016 12.016 0 0 0 .093 8.4h4.063l.666-1.155L2.266 4.2zm15.468 0l-2.556 3.045.666 1.155h4.063a12.016 12.016 0 0 0-2.173-4.2zM18 .84v4.849l.667.278 3.067-1.767A12.053 12.053 0 0 0 18 .84zM.093 8.4a12.134 12.134 0 0 0 0 7.2h3.063l.666-1.155L1.8 12l2.022-2.445-.666-1.155H.093zm19.751 0l-.666 1.155L22.2 12l-2.022 2.445.666 1.155h3.063a12.134 12.134 0 0 0 0-7.2h-3.063zM4.822 9.2L3.6 12l1.222 2.8L6 12l-1.178-2.8zm14.356 0L18 12l1.178 2.8L20.4 12l-1.222-2.8zM12 9.778L10.2 12l1.8 2.222L13.8 12 12 9.778zM.093 15.6a12.016 12.016 0 0 0 2.173 4.2l2.556-3.045-.666-1.155H.093zm23.814 0h-4.063l-.666 1.155 2.556 3.045a12.016 12.016 0 0 0 2.173-4.2zM6 18.311l-.667-.278-3.067 1.767A12.053 12.053 0 0 0 6 23.16v-4.849zm12 0v4.849a12.053 12.053 0 0 0 3.734-3.36l-3.067-1.767-.667.278zM6.7 16.3l-3.5 2.015v7.407A12.07 12.07 0 0 0 6.7 24v-7.7zm10.6 0V24a12.07 12.07 0 0 0 3.5-.278V18.315l-3.5-2.015zM10.2 17.544V24h3.6v-6.456L12 14.222l-1.8 3.322z" />
    </svg>
);

const PostgresIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M17.128 0a10.134 10.134 0 0 0-2.755.403l-.063.02A10.922 10.922 0 0 0 12.6.258C11.422.238 10.41.524 9.594 1 8.79.721 7.122.24 5.364.336 4.14.403 2.804.775 1.814 1.82.827 2.865.305 4.482.415 6.682c.03.607.203 1.597.49 2.879s.69 2.783 1.193 4.152c.503 1.37 1.054 2.6 1.915 3.436.43.419 1.022.771 1.72.742.49-.02.933-.235 1.315-.552.186.245.385.352.566.451.228.125.45.21.68.266.413.103 1.12.241 1.948.1.282-.047.579-.058.088.27l.009.02c.208.397.437.79.728 1.089.29.299.67.53 1.129.53.277 0 .46-.036.936-.165.248-.067.479-.158.69-.282l.009.017a1.746 1.746 0 0 0 .345.442c.166.149.352.27.553.365.637.303 1.4.396 2.234.3a8.083 8.083 0 0 0 1.596-.358 6.823 6.823 0 0 0 1.178-.506 3.495 3.495 0 0 0 .188-.117l.012.06c.039.182.122.366.294.524.172.157.422.272.732.272.26 0 .478-.058.905-.2.428-.143.953-.38 1.477-.76a6.2 6.2 0 0 0 1.41-1.49c.403-.588.75-1.304.924-2.132.233-1.107.308-2.048.26-2.95a7.144 7.144 0 0 0-.388-1.948c.023-.327.034-.652.032-.974-.013-1.956-.483-3.525-1.262-4.78A7.104 7.104 0 0 0 20.39 1.74a6.99 6.99 0 0 0-3.262-.802zM17.18.962a6.018 6.018 0 0 1 2.825.696c.87.467 1.59 1.14 2.13 2.035.541.894.95 2.015.989 3.47.004.264-.006.525-.03.78l-.012-.03a6.4 6.4 0 0 0-.5-.944c-.456-.721-1.128-1.374-1.93-1.873-.8-.498-1.73-.853-2.73-1.04-.999-.188-2.052-.207-3.1-.048l-.025.004c-.317-.4-.694-.762-1.115-1.056a8.56 8.56 0 0 1 1.83-.257c.563-.025 1.11.025 1.633.08.038.004.079.005.117.007-.024-.002-.048-.003-.073-.005a8.898 8.898 0 0 0-1.077-.063c.369.016.727.072 1.068.243z" />
    </svg>
);

const SqlIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M12 3C7.58 3 4 4.79 4 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7c0-2.21-3.58-4-8-4zm0 2c3.87 0 6 1.5 6 2s-2.13 2-6 2-6-1.5-6-2 2.13-2 6-2zM6 17v-2.42c1.23.79 3.07 1.3 5 1.39v2.99c-2.21-.13-3.98-.74-5-1.96zm7 2v-3c1.92-.1 3.77-.6 5-1.39V17c-1.02 1.22-2.79 1.83-5 1.96z" />
    </svg>
);

const GitIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M23.546 10.93L13.067.452a1.55 1.55 0 0 0-2.188 0L8.708 2.627l2.76 2.76a1.838 1.838 0 0 1 2.327 2.341l2.658 2.66a1.838 1.838 0 0 1 1.9 3.039 1.837 1.837 0 0 1-2.6 0 1.846 1.846 0 0 1-.404-1.996L12.86 8.955v6.525a1.844 1.844 0 0 1 .486.383 1.838 1.838 0 0 1 0 2.6 1.838 1.838 0 0 1-2.6 0 1.838 1.838 0 0 1 0-2.598c.182-.18.387-.316.605-.406V8.835a1.834 1.834 0 0 1-.996-2.41L7.636 3.7.45 10.881a1.55 1.55 0 0 0 0 2.188l10.48 10.477a1.55 1.55 0 0 0 2.186 0l10.43-10.43a1.55 1.55 0 0 0 0-2.187z" />
    </svg>
);

const GithubIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
);

const PostmanIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M13.527.099C6.955-.744.942 3.9.099 10.473c-.843 6.572 3.8 12.584 10.373 13.428 6.573.843 12.587-3.801 13.428-10.374C24.744 6.955 20.101.943 13.527.099zm2.471 7.485a.855.855 0 0 0-.593.25l-4.453 4.453-.307-.307-.643-.643c4.389-4.376 5.18-4.418 5.996-3.753zm-4.863 4.861l4.44-4.44a.62.62 0 1 1 .847.903l-4.699 4.125-.588-.588zm.33.694l-1.1.238a.06.06 0 0 1-.067-.082l.391-.907.776.75zm-.29 1.09l-1.12-.948 1.162-.496-.042 1.444zm-1.9-1.3l1.459-.628a.09.09 0 0 1 .12.107l-.05 1.728a.09.09 0 0 1-.155.056l-1.374-1.263zm-2.1-1.18l.642.643-3.39 3.39-.644-.643 3.392-3.39z" />
    </svg>
);

const DockerIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M13.983 11.078h2.119c.117 0 .211-.094.211-.211V8.89c0-.117-.094-.211-.211-.211h-2.119c-.117 0-.211.094-.211.211v1.977c0 .117.094.211.211.211zm-4.186 0h2.119c.117 0 .211-.094.211-.211V8.89c0-.117-.094-.211-.211-.211H9.797c-.117 0-.211.094-.211.211v1.977c0 .117.094.211.211.211zm-4.186 0h2.119c.117 0 .211-.094.211-.211V8.89c0-.117-.094-.211-.211-.211H5.611c-.117 0-.211.094-.211.211v1.977c0 .117.094.211.211.211zm8.372-3.917h2.119c.117 0 .211-.094.211-.211V4.972c0-.117-.094-.211-.211-.211h-2.119c-.117 0-.211.094-.211.211v1.978c0 .117.094.211.211.211zm-4.186 0h2.119c.117 0 .211-.094.211-.211V4.972c0-.117-.094-.211-.211-.211H9.797c-.117 0-.211.094-.211.211v1.978c0 .117.094.211.211.211z" />
    </svg>
);

const LinuxIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 0 0-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.134.063.198.114.333l.003.003c.391.778 1.113 1.132 1.884 1.071.771-.06 1.592-.536 2.257-1.306.631-.765 1.683-1.084 2.378-1.503.348-.199.629-.469.649-.853.023-.4-.2-.811-.714-1.376v-.097l-.003-.003c-.17-.2-.25-.535-.338-.926-.085-.401-.182-.786-.492-1.046h-.003c-.059-.054-.123-.067-.188-.135a.357.357 0 0 0-.19-.064c.431-1.278.264-2.55-.173-3.694-.533-1.41-1.465-2.638-2.175-3.483-.796-1.005-1.576-1.957-1.56-3.368.026-2.152.236-6.133-3.544-6.139zm.529 3.405h.013c.213 0 .396.062.584.198.19.135.33.332.438.533.105.259.158.459.166.724 0-.02.006-.04.006-.06v.105a.086.086 0 0 1-.004-.021l-.004-.024a1.807 1.807 0 0 1-.15.706.953.953 0 0 1-.213.335.71.71 0 0 0-.088-.042c-.104-.045-.198-.064-.284-.133a1.312 1.312 0 0 1-.22-.253 1.73 1.73 0 0 1-.246-.639c-.06-.329-.043-.645.046-.925.089-.288.231-.54.441-.705.096-.075.203-.137.32-.164z" />
    </svg>
);

const PhpIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.866 1.55zm5.323-2.186l-.272 1.394c-.048.24-.042.4.018.476.059.077.18.116.363.116h.693l-.263 1.349h-1.146c-.476 0-.823-.103-1.04-.31-.218-.206-.274-.555-.169-1.046l.303-1.563h-.493l.248-1.275h.495l.187-.968h1.378l-.187.968h.906l-.248 1.275h-.774zm5.074 2.186c-.261.25-.575.438-.918.551-.335.108-.764.164-1.285.164h-1.181l-.327 1.681h-1.378l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.477 1.002.33 1.752a2.836 2.836 0 0 1-.865 1.55zm-.952-2.186h-.944l-.515 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.123-.995-.176-.193-.524-.29-1.048-.29z" />
    </svg>
);

const SpringIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M21.8 5.4c-1.4-1.8-3.4-3-5.6-3.4 1.4 1.8 2.1 4 2 6.2-.1 2.2-.9 4.3-2.3 6-1.6 1.9-3.8 3.2-6.3 3.6 1.7.7 3.6.9 5.4.5 2.2-.5 4.1-1.8 5.4-3.6 1.8-2.4 2.3-5.6 1.4-8.8-.1-.2-.1-.3 0-.5zM3.5 18.1c1.5 1.8 3.6 3 5.8 3.5-1.5-1.9-2.2-4.1-2.1-6.4.1-2.1.9-4.1 2.2-5.8 1.5-1.9 3.7-3.2 6.1-3.6-1.7-.7-3.5-.9-5.3-.5-2.1.5-4 1.7-5.3 3.5-1.8 2.4-2.4 5.5-1.6 8.7.1.2.1.4.2.6z" />
    </svg>
);

// ========== DATA ==========
const frontendTechs = [
    { name: "TypeScript", icon: <TypeScriptIcon /> },
    { name: "React", icon: <ReactIcon /> },
    { name: "Next.js", icon: <NextIcon /> },
    { name: "Tailwind CSS", icon: <TailwindIcon /> },
];

const backendTechs = [
    { name: "Node.js", icon: <NodeIcon /> },
    { name: "Express", icon: <ExpressIcon /> },
    { name: "PHP", icon: <PhpIcon /> },
    { name: "Spring Boot", icon: <SpringIcon /> },
];

const databaseTechs = [
    { name: "PostgreSQL", icon: <PostgresIcon /> },
    { name: "SQL", icon: <SqlIcon /> },
];

const toolsTechs = [
    { name: "Git", icon: <GitIcon /> },
    { name: "GitHub", icon: <GithubIcon /> },
    { name: "Postman", icon: <PostmanIcon /> },
    { name: "Docker", icon: <DockerIcon /> },
    { name: "Linux", icon: <LinuxIcon /> },
];

const stackLeft = [
    { name: "TypeScript", icon: <TypeScriptIcon /> },
    { name: "React", icon: <ReactIcon /> },
    { name: "Next.js", icon: <NextIcon /> },
    { name: "Tailwind CSS", icon: <TailwindIcon /> },
    { name: "Node.js", icon: <NodeIcon /> },
    { name: "PHP", icon: <PhpIcon /> },
];

const stackRight = [
    { name: "PostgreSQL", icon: <PostgresIcon /> },
    { name: "Git", icon: <GitIcon /> },
    { name: "GitHub", icon: <GithubIcon /> },
    { name: "Docker", icon: <DockerIcon /> },
    { name: "Linux", icon: <LinuxIcon /> },
    { name: "Postman", icon: <PostmanIcon /> },
];

const marqueeItems = [
    { name: "TypeScript", icon: <TypeScriptIcon /> },
    { name: "React", icon: <ReactIcon /> },
    { name: "Next.js", icon: <NextIcon /> },
    { name: "Tailwind CSS", icon: <TailwindIcon /> },
    { name: "Node.js", icon: <NodeIcon /> },
    { name: "Express", icon: <ExpressIcon /> },
    { name: "PHP", icon: <PhpIcon /> },
    { name: "Spring Boot", icon: <SpringIcon /> },
    { name: "PostgreSQL", icon: <PostgresIcon /> },
    { name: "Git", icon: <GitIcon /> },
    { name: "Docker", icon: <DockerIcon /> },
    { name: "Linux", icon: <LinuxIcon /> },
];

export default function PresentationSection() {
    const [copied, setCopied] = useState(false);

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(EMAIL);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            console.error("Failed to copy email");
        }
    };

    return (
        <section id="presentation" className="relative z-10 py-24 bg-[#101010]">
            <div className="max-w-7xl mx-auto px-6">
                <SectionHeader
                    title="Présentation"
                    subtitle="Qui suis-je et ce que je fais"
                />

                {/* Row 1: 4 Tech Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                    <StaticCard title="Frontend">
                        <div className="flex flex-wrap gap-3">
                            {frontendTechs.map((tech) => (
                                <TechIcon key={tech.name} name={tech.name} icon={tech.icon} />
                            ))}
                        </div>
                    </StaticCard>

                    <StaticCard title="Backend">
                        <div className="flex flex-wrap gap-3">
                            {backendTechs.map((tech) => (
                                <TechIcon key={tech.name} name={tech.name} icon={tech.icon} />
                            ))}
                        </div>
                    </StaticCard>

                    <StaticCard title="Base de données">
                        <div className="flex flex-wrap gap-3">
                            {databaseTechs.map((tech) => (
                                <TechIcon key={tech.name} name={tech.name} icon={tech.icon} />
                            ))}
                        </div>
                    </StaticCard>

                    <StaticCard title="Outils / Environnement">
                        <div className="flex flex-wrap gap-3">
                            {toolsTechs.map((tech) => (
                                <TechIcon key={tech.name} name={tech.name} icon={tech.icon} />
                            ))}
                        </div>
                    </StaticCard>
                </div>

                {/* Row 2: Bento Grid */}
                <div className="grid lg:grid-cols-12 gap-6 mt-6">
                    {/* Left: About Text */}
                    <div className="lg:col-span-8">
                        <div className="bg-[#1f1f1f] border border-white/5 rounded-2xl p-6 md:p-8 h-full hover:border-white/10 transition-colors">
                            <div className="flex flex-col md:flex-row gap-6">
                                {/* Avatar sticky */}
                                <div className="flex-shrink-0 md:sticky md:top-8 self-start">
                                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#d9885a] to-[#f2c38f] flex items-center justify-center text-3xl font-bold text-white">
                                        A
                                    </div>
                                    <div className="mt-3 space-y-1">
                                        <span className="inline-block px-2 py-0.5 bg-emerald-500/20 text-emerald-400 text-xs rounded-full">
                                            Alternance
                                        </span>
                                        <span className="inline-block px-2 py-0.5 bg-blue-500/20 text-blue-400 text-xs rounded-full">
                                            Auto-entrepreneur
                                        </span>
                                    </div>
                                </div>

                                {/* Text content */}
                                <div className="flex-1 space-y-6 max-h-64 overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-white/10">
                                    <div>
                                        <h3 className="text-lg font-semibold text-white mb-2">Ce qui m&apos;anime aujourd&apos;hui</h3>
                                        <p className="text-white/70 leading-relaxed mb-3">
                                            Je suis Ange, développeur fullstack spécialisé JavaScript / TypeScript, actuellement en recherche d&apos;alternance.
                                        </p>
                                        <p className="text-white/70 leading-relaxed mb-3">
                                            Mon terrain de prédilection : le backend et la cybersécurité. Si je maîtrise l&apos;ensemble de la stack, c&apos;est vraiment côté serveur que je m&apos;épanouis : API robustes, logique métier solide et sécurisation dès la conception.
                                        </p>
                                        <p className="text-white/70 leading-relaxed mb-3">
                                            La veille technologique fait partie de mon quotidien. Je suis de près les nouvelles vulnérabilités, les frameworks émergents et les innovations majeures comme les réseaux sociaux d&apos;IA ou OpenClaw, qui redéfinissent notre manière de concevoir les systèmes.
                                        </p>
                                        <p className="text-white/70 leading-relaxed">
                                            Backend rigoureux, sécurité native, veille continue : cette trilogie guide mon travail et façonne ma vision du métier de développeur.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-semibold text-white mb-2">Mes origines</h3>
                                        <p className="text-white/70 leading-relaxed mb-3">
                                            Depuis petit, l&apos;IT m&apos;attire comme un puzzle infini. Face à un site ou une application, je me demandais toujours : comment ont-ils fait ça ? Comment le construire ? Comment le protéger ?
                                        </p>
                                        <p className="text-white/70 leading-relaxed mb-3">
                                            Très tôt, la curiosité technique s&apos;est doublée d&apos;une obsession pour la sécurité. Comprendre comment un système fonctionne, mais aussi comment il peut être attaqué ou protégé.
                                        </p>
                                        <p className="text-white/70 leading-relaxed mb-3">
                                            J&apos;ai vite compris l&apos;essentiel : dans l&apos;IT, l&apos;apprentissage ne s&apos;arrête jamais. Les technologies évoluent, les menaces aussi. On ne peut pas mettre sa carrière en pause.
                                        </p>
                                        <p className="text-white/70 leading-relaxed">
                                            Et c&apos;est exactement ce qui me passionne. Jamais de routine figée, toujours quelque chose à comprendre, à améliorer, à sécuriser. Un domaine en mouvement permanent.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Stack + Email */}
                    <div className="lg:col-span-4 flex flex-col gap-6">
                        {/* Ma Stack */}
                        <div className="bg-[#1f1f1f] border border-white/5 rounded-2xl p-5 hover:border-white/10 transition-colors group">
                            <h3 className="text-sm font-semibold text-white/50 uppercase tracking-wider mb-4">
                                Ma Stack
                            </h3>
                            <div className="grid grid-cols-2 gap-4">
                                <StackColumn items={stackLeft} reverse />
                                <StackColumn items={stackRight} />
                            </div>
                        </div>

                        {/* Copy Email Button */}
                        <button
                            onClick={copyEmail}
                            className={`relative overflow-hidden bg-[#1f1f1f] border-2 rounded-2xl p-5 
                flex items-center justify-center gap-3 group transition-all duration-300
                ${copied
                                    ? "border-emerald-500 bg-emerald-500/10"
                                    : "border-white/10 hover:border-[#d9885a]/50 animate-border-glow"
                                }`}
                            aria-label="Copier l'adresse email"
                        >
                            {copied ? (
                                <>
                                    <Check className="w-5 h-5 text-emerald-400" />
                                    <span className="font-medium text-emerald-400">Email copié !</span>
                                </>
                            ) : (
                                <>
                                    <Copy className="w-5 h-5 text-white/70 group-hover:text-[#d9885a] transition-colors" />
                                    <span className="font-medium text-white/70 group-hover:text-white transition-colors">
                                        Enregistrer mon email
                                    </span>
                                </>
                            )}
                        </button>
                    </div>
                </div>

                {/* Row 3: Marquee */}

            </div>
        </section>
    );
}
