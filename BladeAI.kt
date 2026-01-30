package com.ciphertech.blademessengerlite
object BladeAI {
    fun reply(input: String): String {
        return when {
            input.contains("nani alikuunda", true) -> "Nimeundwa na Tarik, mkuu na mmiliki wa Cipher Tech."
            input.contains("upo wapi", true) -> "Nilianzishwa Masasi, Tanzania."
            else -> "Karibu. Nikusaidie nini leo?"
        }
    }
}