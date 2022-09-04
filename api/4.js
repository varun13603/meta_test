// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    "name"  : "Cubie #4",
    "rarity": "Rare",
    "power" : "2",
    "image" : "https://ipfs.filebase.io/ipfs/bafkreih6k3lfstxsq4vuwkzxeiflri7z2dd7yheoryc3hxgw6czn4zqq4i"
  })
}
