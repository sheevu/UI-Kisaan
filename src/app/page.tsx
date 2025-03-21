@@ -3,7 +3,8 @@
 import { Navbar } from '@/components/Navbar'
 import { Hero } from '@/components/Hero'
 import { Features } from '@/components/Features'
-import { AIChat } from '@/components/AIChat'
+import AIChat from '@/components/AIChat'; // ✅ Use default import
+
 import { Footer } from '@/components/Footer'
 
 export default function Home() {
@@ -16,4 +17,4 @@ export default function Home() {
       <Footer />
     </main>
   )
-} 
\ No newline at end of file
+}
