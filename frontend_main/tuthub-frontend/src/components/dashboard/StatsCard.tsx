import React, { ReactNode } from "react";

interface StatsCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon: ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

export default function StatsCard({
  title,
  value,
  description,
  icon,
  trend,
}: StatsCardProps) {
  return (
    <div className="card p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <div className="flex items-baseline mt-1">
            <p className="text-2xl font-semibold">{value}</p>
            {trend && (
              <span
                className={`ml-2 text-xs font-medium ${
                  trend.isPositive ? "text-success" : "text-error"
                }`}
              >
                {trend.isPositive ? "+" : "-"}
                {trend.value}%
              </span>
            )}
          </div>
          {description && (
            <p className="mt-1 text-xs text-muted-foreground">{description}</p>
          )}
        </div>
        <div className="p-3 rounded-full bg-muted text-primary">{icon}</div>
      </div>
    </div>
  );
} 