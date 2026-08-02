# Private MELT data — keep outside Git

This directory is ignored except for this example file. It may be used locally for working records, but an encrypted, access-controlled business system is safer than relying on an ignored folder alone.

Examples of private material:

- Customer names, messages, addresses, order details, and consent records
- Residential address, personal phone numbers, and pickup instructions
- Supplier contacts, accounts, invoices, and purchase costs
- Exact recipes, test formulas, and proprietary processes
- Pricing calculations, revenue, profit, tax, and payment records
- Production schedules, incident reports, passwords, tokens, or keys

Never rename real private files to force-add them. Before every push, run `git status` and inspect the staged diff.
