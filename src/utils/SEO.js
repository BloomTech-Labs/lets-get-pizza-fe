import React from 'react'
import { Helmet } from 'react-helmet'

const SEO = () => {
    return (
        <Helmet>
            {/* PAGE DESCRIPTION */}
            
            <meta charset="utf-8" />
            <title>Plza: Connection through pizza</title>
            <link rel="manifest" href="/manifest.json" />
            <link rel='icon' href='favicon.ico' type='image/png' size='16x16'/>
            <link rel="apple-touch-icon" href="logo192.png" />
            <meta name='description' content='Connecting pizza eaters & businesses- find & rate pizza and organize pizza-related social gatherings and events.' />

            {/* SOCIAL MEDIA META TAGS */}

            <meta property='og:title' content='Plza: Connection through pizza' />
            <meta property='og:type' content='website' />
            <meta property='og:description' content='Connecting pizza eaters & businesses- find & rate pizza and organize pizza-related social gatherings and events.' />
            <meta property='og:image' content='https://github.com/Lambda-School-Labs/lets-get-pizza-fe/blob/master/src/media/man-eating-pizza-3182799.jpg?raw=true'/>
            <meta property='og:url' content='https://pleazza.com' />
            <meta name='twitter:card' content='summary' />
            <meta name='twitter:title' content='Plza: Connection through pizza' />
            <meta name='twitter:description' content='Connecting pizza eaters & businesses- find & rate pizza and organize pizza-related social gatherings and events.' />
            
        </Helmet>
    )
}

export default SEO