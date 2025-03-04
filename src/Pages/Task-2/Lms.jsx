import LmsHeader from '../Task-2/LmsHeader.jsx';
import LmsBody from '../Task-2/LmsBody.jsx';
import LmsFooter from '../Task-2/LmsFooter.jsx';

const Lms = () => {
  const companyDEtails = {
    nav_1: "Logo",
    nav_2: "Login",
    nav_3: "Sign Up",

    name_1: "Anywhere Access Easy Learning",
    name_2: "The Best",
    name_3: "Platform ",
    name_4: "For Enhancing Skills",
    name_5: "Working collaboratively to ensure every student achieves academically, socially, and emotionally.",
    name_6: "GIRL",
    name_7: "BOY",
    heroImage: "hero",

    icon: "userlogo",
    title_1: "Learn Anywhere",
    title_2: "Lifetime Access",
    title_3: "24/7 Support",
    title_4: "Expert Instructor",
  };

  return (
    <>
    <div>
      <LmsHeader data={companyDEtails} />
      <LmsBody data={companyDEtails} />
      <LmsFooter data={companyDEtails} />

    </div>
    </>
)
}

export default Lms
