resource "azurerm_service_plan" "service_plan" {
    name                = "${var.project}sp"
    location            = azurerm_resource_group.resource_group.location
    resource_group_name = azurerm_resource_group.resource_group.name

    os_type             = "Linux"
    sku_name            = "F1"
}
