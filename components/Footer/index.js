import classNames from "classnames";
import styles from "../../styles/Footer.module.css";

// 상호 : 메모리레인 | 대표 : 심원보 | 사업자등록번호 : 178-13-01961 | CS주소: 부산 북구 금곡대로 268 402-2101
// 통신판매업신고번호 : 2023-부산북구-0383호 | 전화번호 : 0507-1360-5443 | 이메일 : acin211@naver.com
// COPYRIGHT ⓒ 2023MEMORYRAIN. ALL RIGHT RESERVED

const Footer = () => {
    return (
        <footer className={classNames(styles.footer, "width-setter")}>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div>
                        <div className={styles.title}>
                            상호: 메모리레인 | 대표: 심원보
                        </div>
                        <div className={styles.title}>
                            사업자등록번호 : 178-13-01961
                        </div>
                        <div className={styles.title}>
                            CS주소: 부산 북구 금곡대로 268 402-2101
                        </div>
                        <div className={styles.title}>
                            통신판매업신고번호 : 2023-부산북구-0383호
                        </div>
                        <div className={styles.title}>
                            전화번호 : 0507-1360-5443
                        </div>
                        <div className={styles.title}>
                            이메일 : acin211@naver.com
                        </div>
                        <div className={styles.title}>
                            COPYRIGHT ⓒ 2023MEMORYRAIN. ALL RIGHT RESERVED
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
