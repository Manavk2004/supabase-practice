import { openai, supabase }  from "./config.js"
import podcasts from "./content.js"

const query = "Jammin in the big easy"

const content = [
    "Beyond Mars: speculating life on distant planets.",
    "Jazz under stars: a night in New Orleans' music scene.",
    "Mysteries of the deep: exploring uncharted ocean caves.",
    "Rediscovering lost melodies: the rebirth of vinyl culture.",
    "Tales from the tech frontier: decoding AI ethics.",
]

async function main(input){
    const data = await Promise.all(
        input.map(async(text)=>{
            const embeddingResponse = await openai.embeddings.create({
                model: "text-embedding-3-large",
                input: text,
                encoding_format: "float"
            })
            
            return {content: text, embedding: embeddingResponse.data[0].embedding}
        })

    )
    console.log(data)
    await supabase.from("documents").insert(data)

}

main(podcasts)
