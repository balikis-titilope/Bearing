import styles from './[slug].module.css';

export default function PathLoading() {
    return (
        <main className={styles.page}>
            <div className="container">
                <div className={`${styles.hero} ${styles.pulse}`}>
                    <div className={styles.heroContent}>
                        <div style={{ height: '3rem', width: '60%', background: 'rgba(238, 238, 238, 0.1)', borderRadius: '8px', margin: '0 auto 1rem' }} />
                        <div style={{ height: '1.25rem', width: '80%', background: 'rgba(238, 238, 238, 0.1)', borderRadius: '4px', margin: '0 auto 2rem' }} />
                        <div className={styles.heroStats}>
                            {[1, 2, 3].map((i) => (
                                <div key={i} className={styles.stat}>
                                    <div style={{ height: '2.5rem', width: '40px', background: 'rgba(238, 238, 238, 0.1)', borderRadius: '4px' }} />
                                    <div style={{ height: '0.875rem', width: '60px', background: 'rgba(238, 238, 238, 0.1)', borderRadius: '4px', marginTop: '4px' }} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className={styles.roadmap}>
                    {[1, 2].map((i) => (
                        <div key={i} className={styles.level} style={{ opacity: 0.5, marginBottom: '2rem' }}>
                            <div style={{ height: '2rem', width: '200px', background: 'rgba(238, 238, 238, 0.1)', borderRadius: '4px', marginBottom: '1rem' }} />
                            <div style={{ height: '1rem', width: '100%', background: 'rgba(238, 238, 238, 0.1)', borderRadius: '4px', marginBottom: '2rem' }} />
                            <div className={styles.skillsList}>
                                {[1, 2, 3].map((j) => (
                                    <div key={j} className={styles.skill}>
                                        <div style={{ height: '32px', width: '32px', background: 'rgba(238, 238, 238, 0.1)', borderRadius: '8px' }} />
                                        <div style={{ flex: 1 }}>
                                            <div style={{ height: '1.1rem', width: '150px', background: 'rgba(238, 238, 238, 0.1)', borderRadius: '4px', marginBottom: '4px' }} />
                                            <div style={{ height: '0.875rem', width: '100%', background: 'rgba(238, 238, 238, 0.1)', borderRadius: '4px' }} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
