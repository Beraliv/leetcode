// time - 13m
function entityParser(text: string): string {
  const map: Record<string, string> = {};
  map["&quot;"] = '"';
  map["&apos;"] = "'";
  map["&gt;"] = ">";
  map["&lt;"] = "<";
  map["&frasl;"] = "/";
  map["&amp;"] = "&";

  for (const from of Object.keys(map)) {
    const to = map[from];

    text = text.replace(new RegExp(from, "g"), to);
  }

  return text;
}
