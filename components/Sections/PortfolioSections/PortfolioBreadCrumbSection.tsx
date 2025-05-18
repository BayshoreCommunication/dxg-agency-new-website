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
      description="At DXG Agency, we believe that every event tells a unique story. Our portfolio is a vibrant mix of corporate gatherings, private parties, brand activations, and so much more. Each crafted with creativity, attention to detail, and a whole lot of heart. From the initial idea to the final execution, we bring your visions to life, creating unforgettable experiences. Dive into our work and discover how we turn fleeting moments into lasting memories."
    />
  );
};
