
import Link from 'next/link';
import style from 'styles/Home.module.css'
export const HomePage = () => (
    <div className={style.outer}>
        <ul className={style.companies}>
            <h2 className={style.forcompanies}>For Companies</h2>
            <p className={style.para}>We are providing best market place to build your 3d model faster.
            <Link className={style.cmploginbtn} href='/company'>Login As Guest</Link>
        </ul>
        <ul className={style.designers}>
            <h2 className={style.forcompanies}>For Designers</h2>
            <p className={style.para}>Join Us take a look at projects and start working. Its time to groww.</p>
            <Link className={style.designerlgnbtn} href='/designers'>Login As Guest</Link>
        </ul>
    </div>
  );
  