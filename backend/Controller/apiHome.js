exports.getApi = (req, res) => {
  res.status(200).json({message: 'Welcome to the api for CUNY hackathon 2018'});
}

exports.invalidPath = (req, res) => {
  res.status(404).json({error: 'Invalid path'});
}
