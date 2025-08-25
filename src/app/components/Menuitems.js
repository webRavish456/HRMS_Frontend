const Menuitems = [
    {
      icon: '/icons/dashboard.png',
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      icon: '/icons/users.png',
      label: "Users",
      href: "/users",
    },
    {
      icon: "/icons/customer.png",
      label: "Customer & Vendor Management",
      href: "/customer/all-customer",
      item: [
        {
          label: "All Customer",
          href: "/customer/all-customer"
        },
        {
          label: "All Vendor",
          href: '/customer/all-vendor'
        },
        {
          label: "Outstanding Balance",
          href: '/customer/outstanding-balance'
        }
      ]
    },
    {
      icon: "/icons/invoice.png",
      label: "Invoice & Billing",
      href: "/invoice-bill/all-invoice",
      item: [
        {
          label: "All Invoice",
          href: "/invoice-bill/all-invoice"
        },
        {
          label: "Recurring invoices",
          href: "/invoice-bill/recurring-invoices"
        },
        {
          label: "Credit Note & Debit Note",
          href: "/invoice-bill/credit-note-debit-note"
        },
        {
          label: "Delivery Challan",
          href: "/invoice-bill/delivery-challan"
        },
        {
          label: "POS Billing",
          href: "/invoice-bill/pos-billing"
        }
      ]
    },
    {
      icon: "/icons/inventory.png",
      label: "Inventory Management",
      href: "/inventory/product-list", 
      item: [
        {
          label: "Product",
          href: "/inventory/product-list"
        },
        {
          label: "Category",
          href: '/inventory/category'
        },
        {
          label: "Stock Tracking",
          href: '/inventory/stock-tracking'
        },
        {
          label: "Purchase Order",
          href: '/inventory/purchase-order'
        },
        {
          label: "Barcode Scan",
          href: '/inventory/barcode-scan'
        },
        {
           label: "Batch & Expiry Management",
           href: '/inventory/batch-expiry-management'
        }
      ]
    },
    {
      icon: "/icons/payment.png",
      label: "Payments",
      href: "/payment",
    },
    {
      icon: "/icons/tax.png",
      label: "Tax & Compliance",
      href: "/tax-compliance/gst-configuration",
      item: [
        {
          label: "GST Configuration",
          href: "/tax-compliance/gst-configuration"
        },
        {
          label: "HSN & SAC Code",
          href: '/tax-compliance/hsn-sac'
        },
        {
          label: "GSTR-1",
          href: '/tax-compliance/gstr-1'
        },
        {
          label: "GSTR-3B",
          href: '/tax-compliance/gstr-3b'
        },
      ]
    },
    {
      icon: "/icons/expense.png",
      label: "Expense Management",
      href: "/expense-management/expense-list",
      item: [
        {
          label: "Expense List",
          href: "/expense-management/expense-list"
        },
        {
          label: "Expense Category",
          href: '/expense-management/expense-category'
        },
        {
          label: "Recurring Expenses",
          href: '/expense-management/recurring-expense'
        },
      ]
    },
    {
      icon: "/icons/reports.png",
      label: "Reports & Analytics",
      href: "/reports-analytics/sales-report",
      item: [
        {
          label: "Sales Report",
          href: "/reports-analytics/sales-report"
        },
        {
          label: "Purchase Report",
          href: "/reports-analytics/purchase-report"
        },
        {
          label: "Profit/Loss Report",
          href: "/reports-analytics/profit-loss-report"
        },
        {
          label: "Expense Report",
          href: "/reports-analytics/expense-report"
        },
        {
          label: "Inventory Valuation",
          href: "/reports-analytics/inventory-valuation"
        },
        {
          label: "Tax Summary",
          href: "/reports-analytics/tax-summary"
        },
        {
          label: "Payment Reports",
          href: "/reports-analytics/payment-report"
        },
       
      ]
    },
    {
      icon: "/icons/quotation.png",
      label: "Quotation & Estimation",
      href: "/quotation-estimation",
    }
  
  ];
  
  export default Menuitems;
  