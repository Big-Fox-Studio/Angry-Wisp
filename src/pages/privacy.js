import * as React from "react"

const privacyStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const PrivacyPage = () => {
  return (
    <main style={privacyStyles}>
      <h1 style={headingStyles}>Politique de confidentialité</h1>
      <p>
        Votre politique de confidentialité ici...
      </p>
    </main>
  )
}

export default PrivacyPage

export const Head = () => <title>Politique de confidentialité</title>
