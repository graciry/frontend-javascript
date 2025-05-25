// task_5/js/main.ts

// Define MajorCredits interface with branding
export interface MajorCredits {
  credits: number;
  brand: 'major';
}

// Define MinorCredits interface with branding
export interface MinorCredits {
  credits: number;
  brand: 'minor';
}

// sumMajorCredits function sums credits from two MajorCredits and returns a MajorCredits
export function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'major',
  };
}

// sumMinorCredits function sums credits from two MinorCredits and returns a MinorCredits
export function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'minor',
  };
}
