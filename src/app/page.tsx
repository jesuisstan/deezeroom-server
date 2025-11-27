'use client';

import Link from 'next/link';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#0f0d13',
        color: '#fdfcfe',
        padding: '2rem',
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}
    >
      <main
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '3rem'
        }}
      >
        {/* Header */}
        <header style={{ textAlign: 'center', padding: '2rem 0' }}>
          <h1
            style={{
              fontSize: '3rem',
              fontWeight: 'bold',
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #a238ff 0%, #00babc 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            DeezerRoom API Server
          </h1>
          <p
            style={{
              fontSize: '1.25rem',
              color: '#eae8ec',
              maxWidth: '900px',
              margin: '0 auto'
            }}
          >
            GraphQL API server providing data from{' '}
            <a
              href="https://developers.deezer.com/api"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#a238ff',
                textDecoration: 'none',
                whiteSpace: 'nowrap'
              }}
            >
              Deezer Developers API
            </a>
            .
            <br /> Built with Next.js and GraphQL Yoga.
          </p>
        </header>

        {/* GraphQL Playground Card */}
        <section
          style={{
            backgroundColor: '#1a1a1a',
            borderRadius: '12px',
            padding: '2rem',
            border: '2px solid #00babc40'
          }}
        >
          <h2
            style={{
              fontSize: '1.75rem',
              fontWeight: '600',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            🚀 GraphQL Playground
          </h2>
          <p style={{ color: '#eae8ec', marginBottom: '1.5rem' }}>
            Interactive API explorer with schema documentation and autocomplete.
            Test queries directly in your browser.
          </p>
          <Link
            href="/api/graphql"
            target="_blank"
            style={{
              display: 'inline-block',
              padding: '0.75rem 1.5rem',
              backgroundColor: '#00babc',
              color: 'white',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '600',
              transition: 'background-color 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#a238ff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#00babc';
            }}
          >
            Open GraphQL Playground →
          </Link>
        </section>

        {/* API Endpoint */}
        <section
          style={{
            backgroundColor: '#1a1a1a',
            borderRadius: '12px',
            padding: '2rem'
          }}
        >
          <h2
            style={{
              fontSize: '1.75rem',
              fontWeight: '600',
              marginBottom: '1rem'
            }}
          >
            📡 API Endpoint
          </h2>
          <div
            style={{
              backgroundColor: '#0f0d13',
              padding: '1rem',
              borderRadius: '8px',
              border: '1px solid #29282d',
              fontFamily: 'monospace',
              fontSize: '0.9rem',
              color: '#00babc',
              wordBreak: 'break-all'
            }}
          >
            /api/graphql
          </div>
        </section>

        {/* Available Queries */}
        <section
          style={{
            backgroundColor: '#1a1a1a',
            borderRadius: '12px',
            padding: '2rem'
          }}
        >
          <h2
            style={{
              fontSize: '1.75rem',
              fontWeight: '600',
              marginBottom: '1.5rem'
            }}
          >
            🔍 Available Queries
          </h2>

          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            {/* searchTracks */}
            <div
              style={{
                backgroundColor: '#0f0d13',
                padding: '1.5rem',
                borderRadius: '8px',
                border: '1px solid #29282d'
              }}
            >
              <h3
                style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  marginBottom: '0.5rem'
                }}
              >
                searchTracks
              </h3>
              <p
                style={{
                  color: '#eae8ec',
                  marginBottom: '1rem',
                  fontSize: '0.9rem'
                }}
              >
                Search for tracks by keyword
              </p>
              <ul
                style={{
                  color: '#eae8ec',
                  fontSize: '0.9rem',
                  paddingLeft: '1.5rem',
                  lineHeight: '1.8'
                }}
              >
                <li>Parameters: query (String!), limit (Int), index (Int)</li>
                <li>
                  Returns: SearchTracksResult with tracks array, total count,
                  hasMore flag
                </li>
                <li>Use case: Track search in events and playlists</li>
              </ul>
            </div>

            {/* getPopularTracks */}
            <div
              style={{
                backgroundColor: '#0f0d13',
                padding: '1.5rem',
                borderRadius: '8px',
                border: '1px solid #29282d'
              }}
            >
              <h3
                style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  marginBottom: '0.5rem'
                }}
              >
                getPopularTracks
              </h3>
              <p
                style={{
                  color: '#eae8ec',
                  marginBottom: '1rem',
                  fontSize: '0.9rem'
                }}
              >
                Get trending tracks from Deezer charts
              </p>
              <ul
                style={{
                  color: '#eae8ec',
                  fontSize: '0.9rem',
                  paddingLeft: '1.5rem',
                  lineHeight: '1.8'
                }}
              >
                <li>Parameters: limit (Int), index (Int)</li>
                <li>Returns: SearchTracksResult</li>
                <li>Use case: Homepage recommendations</li>
              </ul>
            </div>

            {/* track */}
            <div
              style={{
                backgroundColor: '#0f0d13',
                padding: '1.5rem',
                borderRadius: '8px',
                border: '1px solid #29282d'
              }}
            >
              <h3
                style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  marginBottom: '0.5rem'
                }}
              >
                track
              </h3>
              <p
                style={{
                  color: '#eae8ec',
                  marginBottom: '1rem',
                  fontSize: '0.9rem'
                }}
              >
                Get track details by ID
              </p>
              <ul
                style={{
                  color: '#eae8ec',
                  fontSize: '0.9rem',
                  paddingLeft: '1.5rem',
                  lineHeight: '1.8'
                }}
              >
                <li>Parameters: id (ID!)</li>
                <li>Returns: Track object</li>
                <li>Use case: Track detail view, playback</li>
              </ul>
            </div>

            {/* searchArtists */}
            <div
              style={{
                backgroundColor: '#0f0d13',
                padding: '1.5rem',
                borderRadius: '8px',
                border: '1px solid #29282d'
              }}
            >
              <h3
                style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  marginBottom: '0.5rem'
                }}
              >
                searchArtists
              </h3>
              <p
                style={{
                  color: '#eae8ec',
                  marginBottom: '1rem',
                  fontSize: '0.9rem'
                }}
              >
                Search for artists by name
              </p>
              <ul
                style={{
                  color: '#eae8ec',
                  fontSize: '0.9rem',
                  paddingLeft: '1.5rem',
                  lineHeight: '1.8'
                }}
              >
                <li>Parameters: query (String!), limit (Int), index (Int)</li>
                <li>Returns: SearchArtistsResult</li>
                <li>Use case: Artist preferences, search</li>
              </ul>
            </div>

            {/* artistsByIds */}
            <div
              style={{
                backgroundColor: '#0f0d13',
                padding: '1.5rem',
                borderRadius: '8px',
                border: '1px solid #29282d'
              }}
            >
              <h3
                style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  marginBottom: '0.5rem'
                }}
              >
                artistsByIds
              </h3>
              <p
                style={{
                  color: '#eae8ec',
                  marginBottom: '1rem',
                  fontSize: '0.9rem'
                }}
              >
                Batch fetch artists by IDs
              </p>
              <ul
                style={{
                  color: '#eae8ec',
                  fontSize: '0.9rem',
                  paddingLeft: '1.5rem',
                  lineHeight: '1.8'
                }}
              >
                <li>Parameters: ids ([ID!]!)</li>
                <li>Returns: Array of Artist objects</li>
                <li>Use case: Loading favorite artists</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Example Query */}
        <section
          style={{
            backgroundColor: '#1a1a1a',
            borderRadius: '12px',
            padding: '2rem'
          }}
        >
          <h2
            style={{
              fontSize: '1.75rem',
              fontWeight: '600',
              marginBottom: '1rem'
            }}
          >
            💡 Example Query
          </h2>
          <div
            style={{
              backgroundColor: '#0f0d13',
              padding: '1.5rem',
              borderRadius: '8px',
              border: '1px solid #29282d',
              fontFamily: 'monospace',
              fontSize: '0.9rem',
              color: '#eae8ec',
              overflowX: 'auto'
            }}
          >
            <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
              {`query SearchTracks {
  searchTracks(query: "jazz", limit: 10) {
    tracks {
      id
      title
      artist {
        name
      }
    }
    total
    hasMore
  }
}`}
            </pre>
          </div>
        </section>

        {/* Quick Links */}
        <section
          style={{
            backgroundColor: '#1a1a1a',
            borderRadius: '12px',
            padding: '2rem'
          }}
        >
          <h2
            style={{
              fontSize: '1.75rem',
              fontWeight: '600',
              marginBottom: '1rem'
            }}
          >
            🔗 Quick Links
          </h2>
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}
          >
            <Link
              href="/api/graphql?query=%7BgetPopularTracks(limit:5)%7Btracks%7Bid%20title%20artist%7Bname%7Dalbum%7Btitle%7D%7D%7D%7D"
              style={{ color: '#00babc', textDecoration: 'none' }}
              target="_blank"
            >
              🎵 Get popular tracks (example)
            </Link>
            <Link
              href="/api/graphql?query=%7BsearchTracks(query:%22jazz%22,limit:5)%7Btracks%7Bid%20title%20artist%7Bname%7D%7Dtotal%7D%7D"
              style={{ color: '#00babc', textDecoration: 'none' }}
              target="_blank"
            >
              🔍 Search tracks &quot;jazz&quot; (example)
            </Link>
            <Link
              href="/api/graphql?query=%7BsearchArtists(query:%22daft%20punk%22,limit:3)%7Bartists%7Bid%20name%20picture%7D%7D%7D"
              style={{ color: '#00babc', textDecoration: 'none' }}
              target="_blank"
            >
              🎤 Search artists &quot;daft punk&quot; (example)
            </Link>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}
