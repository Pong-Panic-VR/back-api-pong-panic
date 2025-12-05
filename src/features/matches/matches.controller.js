const Matches = require("./matches.model");
require('dotenv').config()

exports.getMatchById = async (req, res) => {
    try {
        const matchId = req.params.id;
        const match = await Matches.findById(matchId);

        if (!match) {
            return res.status(404).json({ error: "Match introuvable" });
        }
        res.status(200).json(match);
    } catch (err) {
        res.status(400).json({ error: err.message });
    } 
};

exports.deleteMatchById = async (req, res) => {
    try {
        const matchId = req.params.id;
        const deleteMatch = await Matches.findById(matchId);

        if (!deleteMatch) {
            return res.status(404).json({ error: "Match introuvable" });
        }
        
        await deleteMatch.deleteOne();

        res.status(200).json("Match supprimé")
    } catch (err) {
        res.status(400).json({ error: err.message });
    } 
};
