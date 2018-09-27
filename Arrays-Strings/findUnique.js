function findUniqueDeliveryId(deliveryIds) {

    var uniqueDeliveryId = 0;

    deliveryIds.forEach(function (deliveryId) {
        //  console.log(deliveryId)
        //using XOR bits
        uniqueDeliveryId ^= deliveryId;
    });

    return uniqueDeliveryId;
}

findUniqueDeliveryId([1, 1, 2, 11, 2, 3, 3, 4, 4, 5, 5])