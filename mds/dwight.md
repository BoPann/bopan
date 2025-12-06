
![dwight](/mds/imgs/dwight.png)
>This lesson we learn about how to use resource available to us to analyze SIEM event! Like a sheriff (sort of)

## Idedity and Asset
- ### Identity Inventory
	- A catalogue of corporate employees (user accounts), services (machine accounts), and their details like privileges, contacts, and roles within the company.

- ### Asset Inventory
	- a list of all computing resources within an organisation's IT environment.

## Network diagram 
Gives you an idea of the flow of traffic and help determine the meaning of an event

## Alert Triage 
- Enrichment: Use Threat Intelligence and identity inventory to get information about the affected user
- Investigation: Using the gathered data and SIEM logs, make your verdict if the login is expected
- Escalation: Escalate the alert to L2 or communicate the login with the user if necessary


## Conclusion
### Flow
1. assign the task to self
2. do initial checking (email sender, recipient, open port etc...)
3. determine if the incident is TP or FP 
4. if TP -> gather more info to support my finding -> write report and escalate it to L2
5. if FP -> write report to explain why this is a FP