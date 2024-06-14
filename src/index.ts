import { createDNS } from './lib/dns';

export = () => {
  const records = createDNS();

  return Object.fromEntries(
    Object.entries(records).map(([name, records]) => [
      name,
      records.map((record) => ({
        fqn: record.fqdn,
        type: record.resource.type,
      })),
    ]),
  );
};

/**

pulumi config set --path 'dns.zone.muehlbachler-io.data.baseDomain' 'muehlbachler.io'

pulumi config set --path 'dns.zone.muehlbachler-io.entry.adsp.type' 'TXT'
pulumi config set --path 'dns.zone.muehlbachler-io.entry.adsp.values[0]' 'dkim=all'
pulumi config set --path 'dns.zone.muehlbachler-io.entry.adsp.domains[0]' '_adsp._domainkey'

pulumi config set --path 'dns.zone.muehlbachler-io.entry.dkim.type' 'TXT'
pulumi config set --path 'dns.zone.muehlbachler-io.entry.dkim.values[0]' 'v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA1ylAgJBKeG4b3gJCBdYywk3sseI42W5oV2Q8lqleFYd2BI1p4urFmSzkCkXLCX1M1dbzzipmH3ihNhjXOzeIia+RNrOK78sETTpL6EZKcLaM752FsSjN/ar5PAcm7Q7MDmtuJ4J5aCdwHyuBi2WLigHzf+bCmRCN6r83/xIn/OkLtsbeNFazCZlDjNDqRUEbCVec6iVy0sXKQ8v4kfVGgIBEribdVw4jZ4Kd3ImYKwcsfDuAobuF4I65S9t4AjIJd4OKzE5IooZFaHtuxvCifWy3Nf51LZGtABjWaOXKzsDzTbY/1F7ueK6pD4dYWiOFYGfWCJxKMCjLe+vy7W/kcwIDAQAB'
pulumi config set --path 'dns.zone.muehlbachler-io.entry.dkim.domains[0]' 'soverin._domainkey'

pulumi config set --path 'dns.zone.muehlbachler-io.entry.dmarc.type' 'TXT'
pulumi config set --path 'dns.zone.muehlbachler-io.entry.dmarc.values[0]' 'v=DMARC1; p=reject; rua=mailto:postmaster@muehlbachler.io; ruf=mailto:postmaster@muehlbachler.io; fo=0; adkim=r; aspf=r; rf=afrf'
pulumi config set --path 'dns.zone.muehlbachler-io.entry.dmarc.domains[0]' '_dmarc'

pulumi config set --path 'dns.zone.muehlbachler-io.entry.mx.type' 'MX'
pulumi config set --path 'dns.zone.muehlbachler-io.entry.mx.values[0]' '10 mx.soverin.net.'
pulumi config set --path 'dns.zone.muehlbachler-io.entry.mx.values[1]' '20 mx02.soverin.net.'
pulumi config set --path 'dns.zone.muehlbachler-io.entry.mx.values[2]' '30 mx03.soverin.net.'
pulumi config set --path 'dns.zone.muehlbachler-io.entry.mx.domains[0]' ''

pulumi config set --path 'dns.zone.muehlbachler-io.entry.root-txt.type' 'TXT'
pulumi config set --path 'dns.zone.muehlbachler-io.entry.root-txt.values[0]' 'v=spf1 +a include:soverin.net ~all'
pulumi config set --path 'dns.zone.muehlbachler-io.entry.root-txt.values[1]' 'Soverin=yzUy1tHzz74tD69h'
pulumi config set --path 'dns.zone.muehlbachler-io.entry.root-txt.values[2]' 'OSSRH-92228'
pulumi config set --path 'dns.zone.muehlbachler-io.entry.root-txt.values[3]' 'google-site-verification=XOfzgQK-Q9KQFknlfgzkjx0B0sfdMUbnE4nxIuvdt44'
pulumi config set --path 'dns.zone.muehlbachler-io.entry.root-txt.domains[0]' ''

pulumi config set --path 'dns.zone.muehlbachler-io.entry.vault-platform-a.type' 'A'
pulumi config set --path 'dns.zone.muehlbachler-io.entry.vault-platform-a.values[0]' '178.63.69.250'
pulumi config set --path 'dns.zone.muehlbachler-io.entry.vault-platform-a.domains[0]' 'vault.platform'

pulumi config set --path 'dns.zone.muehlbachler-io.entry.vault-platform-aaaa.type' 'AAAA'
pulumi config set --path 'dns.zone.muehlbachler-io.entry.vault-platform-aaaa.values[0]' '2a01:4f8:121:14e2:1::1'
pulumi config set --path 'dns.zone.muehlbachler-io.entry.vault-platform-aaaa.domains[0]' 'vault.platform'

pulumi config set --path 'dns.zone.muehlbachler-io.entry.blog.type' 'A'
pulumi config set --path 'dns.zone.muehlbachler-io.entry.blog.values[0]' '162.159.153.4'
pulumi config set --path 'dns.zone.muehlbachler-io.entry.blog.values[1]' '162.159.152.4'
pulumi config set --path 'dns.zone.muehlbachler-io.entry.blog.domains[0]' 'blog'

pulumi config set --path 'dns.zone.muehlbachler-io.entry.email.type' 'NS'
pulumi config set --path 'dns.zone.muehlbachler-io.entry.email.ttl' 3600
pulumi config set --path 'dns.zone.muehlbachler-io.entry.email.values[0]' 'ns-cloud-a1.googledomains.com.'
pulumi config set --path 'dns.zone.muehlbachler-io.entry.email.values[1]' 'ns-cloud-a2.googledomains.com.'
pulumi config set --path 'dns.zone.muehlbachler-io.entry.email.values[2]' 'ns-cloud-a3.googledomains.com.'
pulumi config set --path 'dns.zone.muehlbachler-io.entry.email.values[3]' 'ns-cloud-a4.googledomains.com.'
pulumi config set --path 'dns.zone.muehlbachler-io.entry.email.domains[0]' 'email'


pulumi config set --path 'dns.zone.email-muehlbachler-io.data.baseDomain' 'email.muehlbachler.io'

pulumi config set --path 'dns.zone.email-muehlbachler-io.entry.mail-cname.type' 'CNAME'
pulumi config set --path 'dns.zone.email-muehlbachler-io.entry.mail-cname.values[0]' 'lisa.mxrouting.net.'
pulumi config set --path 'dns.zone.email-muehlbachler-io.entry.mail-cname.domains[0]' 'mail'


pulumi config set --path 'dns.zone.muehlbachler-xyz.data.baseDomain' 'muehlbachler.xyz'

pulumi config set --path 'dns.zone.muehlbachler-xyz.entry.adsp.type' 'TXT'
pulumi config set --path 'dns.zone.muehlbachler-xyz.entry.adsp.values[0]' 'dkim=all'
pulumi config set --path 'dns.zone.muehlbachler-xyz.entry.adsp.domains[0]' '_adsp._domainkey'

pulumi config set --path 'dns.zone.muehlbachler-xyz.entry.dkim.type' 'TXT'
pulumi config set --path 'dns.zone.muehlbachler-xyz.entry.dkim.values[0]' 'v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAzPEk7WAXc1mhPkSDx1tCt56+cBeqnyblDuN7OstMtkiKgy8WKYO2lZLtyhKMTOUYaViDtMWPgAUcJwsHvfLLsxG9IAkCAirP+aSGTAAfcJm1fo8/5d3HfRWDPkQQNSxEuXAoIcLGcg58kqjKgI1zcU/cWLZ9TXm53Em/PdHDQ+JICNkRft4OhnIFhUTkCKU3npeB7/Mvj6Bu0ldwLAs73S+lAZ5nrG9qMjhFhHb7jJpSyvk++a5XOFVMr22AUzlFPONd6fS/yTwf/60hv5M3T3cRdJqT1e0i61tXec/wpBEh/dvQ6ipnfIrJjK4CPrI+q6kKY4n6YjHPxuCKrU9SNwIDAQAB'
pulumi config set --path 'dns.zone.muehlbachler-xyz.entry.dkim.domains[0]' 'x._domainkey'

pulumi config set --path 'dns.zone.muehlbachler-xyz.entry.dmarc.type' 'TXT'
pulumi config set --path 'dns.zone.muehlbachler-xyz.entry.dmarc.values[0]' 'v=DMARC1; p=reject; rua=mailto:postmaster@muehlbachler.xyz; ruf=mailto:postmaster@muehlbachler.xyz; fo=0; adkim=r; aspf=r; rf=afrf'
pulumi config set --path 'dns.zone.muehlbachler-xyz.entry.dmarc.domains[0]' '_dmarc'

pulumi config set --path 'dns.zone.muehlbachler-xyz.entry.mx.type' 'MX'
pulumi config set --path 'dns.zone.muehlbachler-xyz.entry.mx.values[0]' '10 lisa.mxrouting.net.'
pulumi config set --path 'dns.zone.muehlbachler-xyz.entry.mx.values[1]' '20 lisa-relay.mxrouting.net.'
pulumi config set --path 'dns.zone.muehlbachler-xyz.entry.mx.domains[0]' ''

pulumi config set --path 'dns.zone.muehlbachler-xyz.entry.root-txt.type' 'TXT'
pulumi config set --path 'dns.zone.muehlbachler-xyz.entry.root-txt.values[0]' 'v=spf1 include:mxroute.com ~all'
pulumi config set --path 'dns.zone.muehlbachler-xyz.entry.root-txt.domains[0]' ''

pulumi config set --path 'dns.zone.muehlbachler-xyz.entry.mail-cname.type' 'CNAME'
pulumi config set --path 'dns.zone.muehlbachler-xyz.entry.mail-cname.values[0]' 'lisa.mxrouting.net.'
pulumi config set --path 'dns.zone.muehlbachler-xyz.entry.mail-cname.domains[0]' 'mail'


// FIXME: we MUST add the domain to the domains in each entry!

---

pulumi config rm --path 'dns.zone.muehlbachler-io.entry.pulumitest'

*/
