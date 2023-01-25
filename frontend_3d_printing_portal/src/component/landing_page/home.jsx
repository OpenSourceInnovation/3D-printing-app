import style from 'styles/Home.module.css'
export const HomePage = () => (
    <div className={style.outer}>
        <ul className={style.companies}>
            <h2 className={style.forcompanies}>For Companies</h2>
            <p className={style.para}>We are providing best market place to build your 3d model faster.</p>
            <a className={style.cmploginbtn} href='/company'>Login As Guest</a>
        </ul>
        <ul className={style.designers}>
            <h2 className={style.forcompanies}>For Designers</h2>
            <p className={style.para}>Join us take a look at projects and start working. Its time to groww.</p>
            <a className={style.designerlgnbtn} href='/designers'>Login As Guest</a>
        </ul>
    </div>
  );
  