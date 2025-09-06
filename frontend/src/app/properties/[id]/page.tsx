import HeroSection from "@/app/PropertyDetails/HeroSection";
import { projects } from "../../lib/data/projects";
import Amenities from "@/app/PropertyDetails/Amenities";
import OverviewSection from "@/app/PropertyDetails/OverviewSection";
// import KeyHighlights from "@/app/PropertyDetails/KeyHighlights";
import PropertyImageSlider from "@/app/PropertyDetails/PropertyGallery";
import LocationContactSection from "@/app/PropertyDetails/ContactUs";
import FloorPlansSection from "@/app/PropertyDetails/FloorPlans";

type Props = {
  params: { id: string };
};

// import overview from '../../../../public/images/PropertyDetails/overview.jpg'

export default function PropertyDetails({ params }: Props) {
  const property = projects.find((p) => p.id.toString() === params.id);

  if (!property) {
    return (
      <div className="p-10 text-center text-red-500">Property not found</div>
    );
  }

  return (
    <div>
      {" "}
      {/* ✅ pushes content below navbar */}
      <HeroSection
        image={property.image}
        name={property.title}
        location={property.location}
        types={property.typology}
      />
      <OverviewSection
        bhkOptions={[
          { type: "1 BHK", area: "650 Sq.ft", price: "₹45 Lacs Onwards" },
          { type: "2 BHK", area: "950 Sq.ft", price: "₹80 Lacs Onwards" },
          { type: "3 BHK", area: "1250 Sq.ft", price: "₹1.2 Cr Onwards" },
        ]}
        possession="Dec 2030"
      />
      {/* The Amenities section */}
      <Amenities />
      {/* <KeyHighlights projectId={1} /> */}
      <PropertyImageSlider projectId={property.id} />
      <FloorPlansSection />
      <LocationContactSection />
    </div>
  );
}
