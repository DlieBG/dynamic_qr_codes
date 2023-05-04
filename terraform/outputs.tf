output "cosmosdb_connection_string" {
    value       = azurerm_cosmosdb_account.cosmosdb_account.connection_strings[0]
    description = "Cosmosdb connection string"
    sensitive   = true
}
