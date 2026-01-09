import Image from "next/image";

export default function Loading() {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                backgroundColor: "var(--background)",
            }}
        >
            <div style={{ animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite" }}>
                <Image
                    src="/loader.png"
                    alt="Loading..."
                    width={100}
                    height={100}
                    style={{ objectFit: "contain" }}
                    priority
                />
            </div>
            <style>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: .5;
            transform: scale(0.95);
          }
        }
      `}</style>
        </div>
    );
}
