// MainTitle.stories.tsx
import * as React from "react";
import type { Story } from "@ladle/react";

import MainTitle from "./MainTitle";

const Frame: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div style={{ padding: 24, maxWidth: 980 }}>
    {children}
  </div>
);

export const Default: Story = () => (
  <Frame>
    <MainTitle
      title="Welcome to Acme"
      subtitle="Building the future"
    />
  </Frame>
);
Default.storyName = "Default";

export const LongCopy: Story = () => (
  <Frame>
    <MainTitle
      title="New Patient Intake"
      subtitle="Telehealth and in-person appointments with same-day availability in select cases"
    />
  </Frame>
);
LongCopy.storyName = "Long copy";

export const CasePreserved: Story = () => (
  <Frame>
    <MainTitle
      autoCapitalize={false}
      title="welcome to acme"
      subtitle="building the future"
    />
  </Frame>
);
CasePreserved.storyName = "Case preserved";

export const SlotProps: Story = () => (
  <Frame>
    <MainTitle
      title="Custom Title Defaults"
      subtitle="Subtitle defaults are applied through slotProps"
      slotProps={{
        stack: {
          spacing: 2,
          alignItems: "flex-start",
        },
        title: {
          sx: { letterSpacing: 0.5 },
        },
        subtitle: {
          sx: { opacity: 0.9 },
        },
      }}
    />
  </Frame>
);
SlotProps.storyName = "slotProps";
