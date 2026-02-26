// MainTitle.stories.tsx
import * as React from "react";
import type { Story } from "@ladle/react";

import MainTitle from "./MainTitle";
import type { MainTitleProps } from "./MainTitle";

const Frame: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div style={{ padding: 24, maxWidth: 980 }}>
    {children}
  </div>
);

export const Default: Story = () => (
  <Frame>
    <MainTitle
      blocks={[
        { title: "welcome to acme", type: "primary" },
        { title: "building the future", type: "secondary" },
      ]}
    />
  </Frame>
);
Default.storyName = "Default";

export const MultipleBlocks: Story = () => (
  <Frame>
    <MainTitle
      blocks={[
        { title: "new patient intake", type: "primary" },
        { title: "telehealth & in-person appointments", type: "secondary" },
        { title: "same-day availability in select cases", type: "secondary" },
      ]}
    />
  </Frame>
);
MultipleBlocks.storyName = "Multiple blocks";

export const AutoCapitalizeOff: Story = () => (
  <Frame>
    <MainTitle
      autoCapitalize={false}
      blocks={[
        { title: "welcome to acme", type: "primary" },
        { title: "building the future", type: "secondary" },
      ]}
    />
  </Frame>
);
AutoCapitalizeOff.storyName = "autoCapitalize = false";

export const RichContent: Story = () => (
  <Frame>
    <MainTitle
      blocks={[
        {
          title: (
            <span>
              Welcome to <strong>Acme</strong> <span style={{ opacity: 0.8 }}>—</span>{" "}
              <em>2026</em>
            </span>
          ),
          type: "primary",
        },
        {
          title: (
            <span>
              Book an appointment{" "}
              <a href="#" onClick={(e) => e.preventDefault()}>
                online
              </a>
            </span>
          ),
          type: "secondary",
        },
      ]}
    />
  </Frame>
);
RichContent.storyName = "Rich ReactNode titles";

export const SlotPropsAndOverrides: Story = () => (
  <Frame>
    <MainTitle
      slotProps={{
        stack: {
          spacing: 2,
          alignItems: "flex-start",
        },
        // Defaults applied to ALL primary blocks
        title: {
          // TitleProps surface varies per your implementation; these are common MUI typography props.
          // Keep/remove as needed depending on TitleProps.
          sx: { letterSpacing: 0.5 },
        } as any,
        // Defaults applied to ALL secondary blocks
        subtitle: {
          sx: { opacity: 0.9 },
        } as any,
      }}
      blocks={[
        { title: "default primary styling", type: "primary" },
        {
          title: "primary with per-block override",
          type: "primary",
          titleProps: {
            sx: { textDecoration: "underline" },
          } as any,
        },
        { title: "default secondary styling", type: "secondary" },
        {
          title: "secondary with per-block override",
          type: "secondary",
          titleProps: {
            sx: { opacity: 1, fontStyle: "italic" },
          } as any,
        },
      ]}
    />
  </Frame>
);
SlotPropsAndOverrides.storyName = "slotProps + per-block overrides";
