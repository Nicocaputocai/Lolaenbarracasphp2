<?php
require_once "includes/mp/mercadopago.php";
 
$mp = new MP('4845447994754322', 'sZukafTJuyuDlxTdyAH77SGbWHhaPkcq');

$preference_data = array(
	"items" => array(
		array(
			"id" => "Code",
			"title" => "Remera",
			"currency_id" => "USD",
			"picture_url" =>"https://www.mercadopago.com/org-img/MP3/home/logomp3.gif",
			"description" => "Description",
			"category_id" => "Category",
			"quantity" => 1,
			"unit_price" => 1.2
		)
	),
    "shipments" => array(
        "mode" => "me2",
        "dimensions" => "60x60x60,5000",
        "default_shipping_method" => 73328,
    ),
	"back_urls" => array(
		"success" => "https://www.success.com",
		"failure" => "http://www.failure.com",
		"pending" => "http://www.pending.com"
	),
	"auto_return" => "approved",
	"payment_methods" => array(
		"excluded_payment_methods" => array(
			array(
				"id" => "amex",
			)
		),
		"excluded_payment_types" => array(
			array(
				"id" => "ticket"
			)
		),
		"installments" => 1,
		"default_payment_method_id" => null,
		"default_installments" => null,
	),
	"notification_url" => "https://www.your-site.com/ipn",
	"external_reference" => "Reference_1234",
	"expires" => false,
	"expiration_date_from" => null,
	"expiration_date_to" => null
);

$preference = $mp->create_preference($preference_data);

?>

<!doctype html>
<html>
	<head>
		<title>MercadoPago SDK - Create Preference and Show Checkout Example</title>
	</head>
	<body>
		<a href="<?php echo $preference["response"]["init_point"]; ?>" name="MP-Checkout" class="orange-ar-m-sq-arall">Pay</a>
		<script type="text/javascript" src="//resources.mlstatic.com/mptools/render.js"></script>
	</body>
</html>
