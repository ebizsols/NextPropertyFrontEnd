import React from "react";
import { Container } from "reactstrap";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { User } from "react-feather";
import Breadcrumb from "../../layout/Breadcrumb/Breadcrumb";
import FooterThree from "../../layout/footers/FooterThree";
import NavbarTwo from "../../layout/headers/NavbarTwo";

export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });

const ForgotPassword = () => {
  return (
    <>
      <NavbarTwo />
      <Breadcrumb />
      <section className='login-wrap'>
        <Container>
          <div className='row log-in'>
            <div className='col-xl-5 col-lg-6 col-md-8 col-sm-10 col-12'>
              <div className='theme-card'>
                <div className='title-3 text-start'>
                  <h2>Forgot your password</h2>
                </div>
                <form>
                  <div className='form-group'>
                    <div className='input-group'>
                      <div className='input-group-prepend'>
                        <div className='input-group-text'>
                          <User />
                        </div>
                      </div>
                      <input type='text' className='form-control' placeholder='Enter Email' required />
                    </div>
                  </div>
                  <div>
                    <button type='submit' className='btn btn-gradient btn-pill me-sm-3 me-2'>
                      Send request
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <FooterThree />
    </>
  );
};

export default ForgotPassword;
