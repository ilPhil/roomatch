import styles from "./FormContainer.module.scss";


const FormContainer = () => {
    return (
        <>

            <div className={styles.header}>
                <h1>ROOMATCH</h1>
                <button>x</button>
            </div>


            <p>create your profile</p>

            <div className={styles.stepperWrapper}>
                <div className={styles.stepperItem, styles.completed}>
                    <div className={styles.stepCounter}>1</div>
                    
                </div>
                <div className={styles.stepperItem, styles.active}>
                    <div className={styles.stepCounter}>2</div>
                  
                </div>
                <div className={styles.stepperItem.active}>
                    <div className={styles.stepCounter}>3</div>
                    
                </div>
            </div>

            <button className={styles.btnFwd}>{`>`}</button>
        </>
    )
};

export default FormContainer