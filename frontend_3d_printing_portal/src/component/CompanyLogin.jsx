import stylecompany from 'styles/Companylogin.module.css'
import { useState } from 'react';
import Router from 'next/router'

function CompanyLogin() {
  const [email, setEmail] = useState('Enter Your email');
  let url="https://14cc-2405-201-6823-885a-b0f6-e3fc-b47b-98a.in.ngrok.io/company/auth/guest"
  
  function handleClick() {
    console.log(email)    
    //let x=callAPI()
    console.log("login clickeds")
    Router.push('/company/company-home')
  }
  const callAPI = async () => {
	try {
		const res = await fetch(`https://14cc-2405-201-6823-885a-b0f6-e3fc-b47b-98a.in.ngrok.io/company/auth/guest/abcd@gmail.com`);
		const data = await res.json();
		console.log(data);
	} catch (err) {
		console.log(err);
	}
};
  const handleMessageChange = event => {
    // 👇️ access textarea value
    setEmail(event.target.value);
  };

  return (
    <div className={stylecompany.conatiner}>
        <div className={stylecompany.box}>
          <div>Welcome to 3d-marketplace</div>
            <textarea id='email_value' className={stylecompany.emailbox} rows='1' wrap='off' onChange={handleMessageChange}>{email}</textarea>
            <button className={stylecompany.submit} type="submit" onClick={handleClick}  >Submit</button>
        </div>
    </div>
  );
}

export default CompanyLogin;