import { BreadCrumb } from "@/components/Breadcrumb";

export const PortfolioBreadCrumbSection = () => {
  return (
    <BreadCrumb
      titleProps={{
        coloredText: "Our",
        postText: "Portfolio",
        texAlign: "text-left",
        variant: "caps",
      }}
      buttonTitle="Book An Appointment"
      description="At the core of our ethos, we believe that the essence of our work transcends the boundaries of what we do and how we do it. It's about who we do it with, for, and why we do it. This belief is profoundly woven into every aspect of our business, from our attentive process and unparalleled service to our purpose-driven mission and the vast experience we offer."
    />
  );
};
