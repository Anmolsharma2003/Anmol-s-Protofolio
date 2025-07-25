import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, GraduationCap, Calculator } from "lucide-react";

const MathPortfolio = () => {
  return (
    <div className="min-h-screen bg-math-bg py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-math-header mb-4">
            Mathematics Portfolio
          </h1>
          <p className="text-math-section text-lg">
            Advanced Mathematical Problem Solving & Analysis
          </p>
        </div>

        {/* Exam Info Card */}
        <Card className="mb-8 shadow-[var(--shadow-paper)] bg-gradient-to-br from-math-paper to-math-bg border-primary/20">
          <CardHeader className="bg-gradient-to-r from-primary to-primary-glow text-white rounded-t-lg">
            <CardTitle className="flex items-center gap-3 text-xl">
              <GraduationCap className="h-6 w-6" />
              Examination Details
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-primary" />
                <span className="font-semibold text-math-section">Time:</span>
                <Badge variant="secondary">3 Hours</Badge>
              </div>
              <div className="flex items-center gap-3">
                <Calculator className="h-5 w-5 text-primary" />
                <span className="font-semibold text-math-section">Maximum Marks:</span>
                <Badge variant="secondary">Not Specified</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* General Instructions */}
        <Card className="mb-8 shadow-[var(--shadow-section)]">
          <CardHeader>
            <CardTitle className="text-math-header">General Instructions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-math-section">
              <p><span className="font-semibold">(i)</span> All questions are compulsory.</p>
              <p><span className="font-semibold">(ii)</span> The questions paper consists of 40 questions divided into 4 sections A, B, C and D.</p>
              <p><span className="font-semibold">(iii)</span> Section A comprises of 20 questions of 1 mark each. Section B comprises of 6 questions of 2 marks each. Section C comprises of 8 questions of 3 marks each. Section D comprises of 6 questions of 4 marks each.</p>
              <p><span className="font-semibold">(iv)</span> There is no overall choice. However, an internal choice has been provided in two questions of 1 mark each, two questions of 2 marks each, three questions of 3 marks each, and three questions of 4 marks each. You have to attempt only one of the alternatives in all such questions.</p>
              <p><span className="font-semibold">(v)</span> Use of calculators is not permitted.</p>
            </div>
          </CardContent>
        </Card>

        {/* Section A */}
        <Card className="mb-8 shadow-[var(--shadow-section)]">
          <CardHeader>
            <CardTitle className="text-math-header text-2xl">Section A</CardTitle>
            <p className="text-math-option">Q.1-Q.10 are multiple choice questions. Select the most appropriate answer from the given options.</p>
          </CardHeader>
          <CardContent className="space-y-6">
            
            {/* Question 1 */}
            <div className="border-l-4 border-primary pl-4">
              <h3 className="font-semibold text-math-section mb-3">1. 0.123̄ can be expressed in rational form as [1]</h3>
              <div className="grid grid-cols-2 gap-4 mb-3">
                <div className="space-y-2">
                  <p className="text-math-option">(a) <span className="font-mono">900/111</span></p>
                  <p className="text-math-option">(c) <span className="font-mono">123/10</span></p>
                </div>
                <div className="space-y-2">
                  <p className="text-math-option">(b) <span className="font-mono">111/900</span></p>
                  <p className="text-math-option">(d) <span className="font-mono">121/900</span></p>
                </div>
              </div>
              <div className="bg-accent/30 p-3 rounded-lg">
                <p className="text-math-answer font-semibold">Ans: (b) 111/900</p>
                <div className="mt-2 text-sm text-math-option">
                  <p>Let x = 0.12333...</p>
                  <p>Multiply (1) by 10 on both sides, we get</p>
                  <p>10x = 1.2333...</p>
                  <p>Subtracting (1) from (2), we get</p>
                </div>
              </div>
            </div>

            {/* Question 4 */}
            <div className="border-l-4 border-primary pl-4">
              <h3 className="font-semibold text-math-section mb-3">4. If P x y^h and P y x^h are same points then which of the following is true? [1]</h3>
              <div className="grid grid-cols-2 gap-4 mb-3">
                <div className="space-y-2">
                  <p className="text-math-option">(a) x + y = 0</p>
                  <p className="text-math-option">(c) x - y = 0</p>
                </div>
                <div className="space-y-2">
                  <p className="text-math-option">(b) xy = 0</p>
                  <p className="text-math-option">(d) x² = 0</p>
                </div>
              </div>
              <div className="bg-accent/30 p-3 rounded-lg">
                <p className="text-math-answer font-semibold">Ans: (c) x - y = 0</p>
              </div>
            </div>

            {/* Additional Context Note */}
            <div className="mt-6 p-4 bg-muted rounded-lg">
              <p className="text-math-option text-sm">
                <span className="font-semibold">Note:</span> In second quadrant, abscissa is negative and ordinate is positive number.
              </p>
              <p className="text-math-option text-sm mt-1">
                & a &lt; 0, b &gt; 0
              </p>
            </div>

            {/* Question 5 */}
            <div className="border-l-4 border-primary pl-4">
              <h3 className="font-semibold text-math-section mb-3">5. According to Euclid's definition, the ends of a line [1]</h3>
              <div className="bg-accent/30 p-3 rounded-lg mt-3">
                <p className="text-math-section">P x y^h = P y x^h</p>
                <p className="text-math-section">x = y and y = x → x = y = 0</p>
              </div>
            </div>

          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center py-6">
          <p className="text-math-option">
            This portfolio showcases advanced mathematical problem-solving skills and analytical thinking.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MathPortfolio;