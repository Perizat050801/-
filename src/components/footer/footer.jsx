import style from "./footer.module.css"
import { FcContacts } from "react-icons/fc";




function Footer() {
  return (
    <>

    <div className={style.footer}>
        <p className={style.textOurContacts}>Calvin Klein</p>
    <div className={style.text}>
      <a className={style.FcContacts} href="https://www.instagram.com/calvinklein?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><FcContacts /></a>
    </div> 
        




    </div>


    </>
  ); 

}
export default Footer;



