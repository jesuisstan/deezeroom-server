const Footer = () => {
  return (
    <footer
      style={{
        textAlign: 'center',
        padding: '2rem 0',
        color: '#eae8ec',
        fontSize: '0.9rem',
        borderTop: '1px solid #29282d'
      }}
    >
      <p>
        <a
          href="https://deezeroom.expo.app"
          style={{ color: '#00babc', textDecoration: 'none' }}
          target="_blank"
          rel="noopener noreferrer"
        >
          DeezerRoom
        </a>{' '}
        API Server • Built with Next.js & GraphQL Yoga • Created by{' '}
        <a
          href="https://www.krivtsoff.site/"
          style={{ color: '#00babc', textDecoration: 'none' }}
          target="_blank"
          rel="noopener noreferrer"
        >
          Stanislav Krivtsov
        </a>{' '}
        •{' '}
        <a
          href="https://github.com/jesuisstan/deezeroom-server"
          style={{ color: '#00babc', textDecoration: 'none' }}
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub
        </a>{' '}
        • Paris, France • 2025
      </p>
    </footer>
  );
};

export default Footer;
