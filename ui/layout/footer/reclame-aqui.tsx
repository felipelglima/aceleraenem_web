import Script from "next/script"

export default function ReclameAqui() {
  return (
    <div id="ra-verified-seal">
      <Script
        type="text/javascript"
        id="ra-embed-verified-seal"
        src="https://s3.amazonaws.com/raichu-beta/ra-verified/bundle.js"
        data-id="ZG1GMF91aWpWd2tkT3lOTTphY2VsZXJhLWVuZW0tY3Vyc29zLXByZXBhcmF0b3Jpb3M="
        data-target="ra-verified-seal"
        data-model="2"
      />
    </div>
  )
}
