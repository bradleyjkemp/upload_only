module.exports = function() {
    function uploadOnly(wire) {
        wire.extendedHandshake.upload_only = 1
    }

    return uploadOnly
}