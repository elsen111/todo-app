import { Helmet } from "react-helmet-async"
import { siteMetaData } from "../../../data/site.data"

interface SEO_Props {
      title?: string,
      description?: string
}

const SEO = ({ title, description }: SEO_Props) => {
      return (
            <Helmet>
                  <title>
                        {title ? `${title} | ${siteMetaData.name}` : `${siteMetaData.name}`}
                  </title>

                  <meta
                        name="description"
                        content={description ? `${description}` : `${siteMetaData.metaDescription}`}
                  />
            </Helmet>
      )
}

export default SEO