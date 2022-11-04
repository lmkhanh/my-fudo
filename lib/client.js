import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";
export const client = sanityClient({
    projectId: "e3quog5g",
    dataset: 'production',
    apiVersion: "2022-07-28",
    useCdn: true,
    token: 
    "skgUhUAlRixEGNgSVtQMFQTHBvx8CERRb0ujd1soJVwlvQZS5ge3RnbWEONuwfegOSRiJm5m2hAdqpfFMvljfSdL6lovcBVCOhWZVEIBVptegrKRRWwCs7Iz8b0JFklku02wV8PffjGqp8dwbxMEp7Hv2zVUvYDZnTWbHmCD5eDdOHN9lKBE"
})

const builder = ImageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)