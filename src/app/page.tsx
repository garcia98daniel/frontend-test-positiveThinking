"use client";
import Image from 'next/image'
import styles from './page.module.css'
import ScrollBar from './components/ScrollBar/ScrollBar'
import { useEffect, useState } from 'react';
import { ICompany, IFormData, IImproveOptions, IUser } from '@/ts-types/custom.types';
import RatingSlider from './components/RatingSlider/RatingSlider';
import RatingSliderWithMultiChoice from './components/RatingSliderWithMultiChoice/RatingSliderWithMultiChoice';
import ExtraFeedBack from './components/ExtraFeedBack/ExtraFeedBack';
import Footer from './components/Footer/Footer';
import { useRouter } from 'next/navigation';


export default function Home() {
  const router = useRouter();
  const [user, setUser] = useState<IUser>();
  const [company, setCompany] = useState<ICompany>();
  const [improveOptions, setImproveOptions] = useState<IImproveOptions[]>([
    {
      description: "Quality of feedback",
    },
    {
      description: "Actionability of feedback",
    },
    {
      description: "Openness to receive peer feedback",
    },
    {
      description: "Other",
    },
  ]);

  const [formData, setFormData] = useState<IFormData>({
    rate_slider_one: 0,
    rate_slider_one_comment: "",
    rate_slider_two: 0,

      improve:"",
      improve_comment:"",

    extra_feedback:"",
  });


  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await fetch('/fakeData/user.json');
        const userData = await userResponse.json();
        setUser(userData);

        const companyResponse = await fetch('/fakeData/company.json');
        const companyData = await companyResponse.json();
        setCompany(companyData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  const isSubmitDisabled =
  formData.rate_slider_one < 5 && formData.rate_slider_one_comment === "" ||
  formData.rate_slider_two < 5 && (formData.improve === "" || formData.improve_comment === "");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(isSubmitDisabled){
      alert('Please complete all the field required')
    }else{
      router.push("/thanks")
    }
  }

  return (
    <main className={styles.main}>
      <ScrollBar />

      <section className={styles.logo_and_company_section}>
        <Image src={"/butterfly-icon-color.svg"} alt="logo" height="36" width="36"/>

        <p>{company?.company_name}</p>
      </section>

      <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
        <h2 className={styles.form_h2}>Hi {user?.name},</h2>
        <p className={styles.p_txt}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ullamcorper nisl sed ante molestie, quis facilisis risus placerat. Morbi mattis, lectus in sollicitudin tristique, quam sem aliquam augue.</p>
        <h3 className={styles.form_h3}>Do you agree with the following statements:</h3>

        <RatingSlider value={formData.rate_slider_one} setFormData={setFormData} key_name={"rate_slider_one"} commentValue={formData.rate_slider_one_comment}/>

        <div className={styles.separator}>
          <span>SEPEARATOR</span> 
          <div></div>
        </div>

        <RatingSliderWithMultiChoice 
        improveOptions={improveOptions} 
        value={formData.rate_slider_two} 
        improve={formData.improve} 
        improve_comment={formData.improve_comment} 
        setFormData={setFormData} 
        key_name={"rate_slider_two"
        }/>

        <ExtraFeedBack inputValue={formData.extra_feedback}  setFormData={setFormData} />

        <div className={styles.btn_container}>
          <button className={isSubmitDisabled ? styles.btn_disable :  styles.btn} type='submit'>Submit <Image src={"/arrow_right.svg"} alt="arrow" width={24} height={24}/></button>
        </div>
      </form>

      <Footer/>

    </main>
  )
}
