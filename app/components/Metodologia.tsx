import styles from './Metodologia.module.css';

const Metodologia = () => {
  return (
    <section className={styles.metodologia}>
      <h2 className={styles.titulo}>Así lo hacemos. Sin secretos.</h2>
      <div className={styles.timeline}>
        <div className={styles.paso}>
          <div className={styles.icono}>👂</div>
          <h3>Escuchamos tu necesidad</h3>
          <p>Aunque no parezca una, cada necesidad tiene una oportunidad única.</p>
        </div>
        <div className={styles.paso}>
          <div className={styles.icono}>🖋️</div>
          <h3>Diseñamos una experiencia única</h3>
          <p>Nada es estándar. Cada actividad y dinámica es pensada para tu equipo.</p>
        </div>
        <div className={styles.paso}>
          <div className={styles.icono}>🙌</div>
          <h3>Vivimos el evento juntos</h3>
          <p>No es solo un evento, es una vivencia colectiva. ¡Nos divertimos juntos!</p>
        </div>
        <div className={styles.paso}>
          <div className={styles.icono}>🧠</div>
          <h3>Reflexionamos y compartimos</h3>
          <p>Nos detenemos para reflexionar lo vivido, para que el aprendizaje se internalice.</p>
        </div>
        <div className={styles.paso}>
          <div className={styles.icono}>📊</div>
          <h3>Te entregamos un reporte con claves para seguir creciendo</h3>
          <p>Porque el trabajo nunca termina. Te dejamos un informe con estrategias para seguir mejorando.</p>
        </div>
      </div>
    </section>
  );
};

export default Metodologia;
