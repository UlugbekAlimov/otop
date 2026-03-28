import { Component } from '@angular/core';

interface PricingPlan {
  months: number;
  title: string;
  monthlyPrice: number;
  discountPercent: number;
  badge?: string;
  tier: 'basic' | 'vip' | 'top';
  layoutOrder: number;
  popular?: boolean;
  features: string[];
}

@Component({
  selector: 'app-pricing',
  imports: [],
  templateUrl: './pricing.html',
  styleUrl: './pricing.css',
})
export class Pricing {
  plans: PricingPlan[] = [
    {
      months: 1,
      title: '1 month',
      monthlyPrice: 19,
      discountPercent: 0,
      tier: 'basic',
      layoutOrder: 1,
      features: [
        'Unlimited edits of your own model card',
        '24/7 support',
        'Standard placement in the catalog',
      ],
    },
    {
      months: 3,
      title: '3 months',
      monthlyPrice: 16,
      discountPercent: 16,
      badge: 'VIP',
      tier: 'vip',
      layoutOrder: 3,
      popular: true,
      features: [
        'Unlimited edits of your own model card',
        '24/7 support',
        'VIP mark and bright card border in the catalog',
      ],
    },
    {
      months: 6,
      title: '6 months',
      monthlyPrice: 14,
      discountPercent: 26,
      badge: 'TOP',
      tier: 'top',
      layoutOrder: 2,
      features: [
        'Unlimited edits of your own model card',
        '24/7 support',
        'VIP mark and bright card border in the catalog',
        'Top placement above VIP cards in listings',
      ],
    },
  ];

  get displayPlans(): PricingPlan[] {
    return [...this.plans].sort((a, b) => a.layoutOrder - b.layoutOrder);
  }

  getTotal(months: number, monthlyPrice: number): number {
    return months * monthlyPrice;
  }

  getBaseTotal(months: number): number {
    return months * this.plans[0].monthlyPrice;
  }
}
