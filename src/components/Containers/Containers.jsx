import bgTri from "../../assets/bg-tri.svg";
import useMediaQuery from "../../hooks/useMediaQuery";

export const Container = ({ children }) => {
  return (
    <div className="max-w-[1096px] max-[1096px]:px-8 mx-auto max-md:px-4">
      {children}
    </div>
  );
};

export const RegContainer = ({ formSent, children }) => {
  const isMobile = useMediaQuery("(max-width: 678px)");

  const styles = {
    backgroundImage: `url(${bgTri})`,
    backgroundRepeat: "repeat-y",
    backgroundPosition: `right 91px top 0`,
    height: formSent ? "100vh" : "auto",
  };
  return (
    <div
      className="max-w-[1096px] mx-auto max-xl:px-8 max-md:px-4 relative"
      style={isMobile ? {} : styles}
    >
      {children}
    </div>
  );
};
