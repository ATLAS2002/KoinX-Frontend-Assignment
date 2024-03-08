import { useEffect, useRef, memo } from "react";
import type { FCProps } from "@/types";
import { cn } from "@/lib/utils";

const TradingViewWidget: FCProps<{ symbol: string }> = ({
  symbol,
  className,
}) => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
        {
          "autosize": true,
          "symbol": "BITSTAMP:${symbol}USD",
          "interval": "30",
          "timezone": "Etc/UTC",
          "theme": "light",
          "style": "3",
          "locale": "en",
          "enable_publishing": false,
          "gridColor": "rgba(152, 152, 152, 0.06)",
          "hide_top_toolbar": true,
          "hide_legend": true,
          "save_image": false,
          "calendar": false,
          "hide_volume": true,
          "support_host": "https://www.tradingview.com"
        }`;
    container.current?.appendChild(script);
  }, [symbol]);

  return (
    <div
      className={cn(
        "tradingview-widget-container mt-4 h-full w-full",
        className
      )}
      ref={container}
    />
  );
};

export default memo(TradingViewWidget);
